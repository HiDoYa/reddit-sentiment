from django.shortcuts import render
from django.http import JsonResponse
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import requests
import base64
import json
import re

# Create your views here.


def sentiment_view(request):
    # Gets info from reddit and sends to google api, then returns sentiment
    try:
        title, texts = fetch_posts(request)

        client = language.LanguageServiceClient()

        sentiment_dict = {}
        # Repeat for each text
        for idx, text in enumerate(texts):
            document = types.Document(
                content=text,
                language="EN",
                type=enums.Document.Type.PLAIN_TEXT)

            sentiment = client.analyze_sentiment(document=document)

            # Convert object to dict
            arr_sentences = []
            for sentence in sentiment.sentences:
                arr_sentences.append({"text": sentence.text.content,
                                      "score": round(sentence.sentiment.score * 10)})

            sentiment_dict.update({idx: {"overall_score": round(sentiment.document_sentiment.score * 10),
                                         "detail": arr_sentences}})

    except Exception as e:
        return JsonResponse({"error": str(e)})

    return JsonResponse({"sentiment_dict": sentiment_dict, "title": title})


def fetch_posts(request):
    # Gets info from reddit

    # Loads necessary vars (sent from frontend POST req)
    req_body = json.loads(request.body.decode("utf-8"))
    access_token = req_body["access_token"]
    reddit_str = req_body["reddit_str"]
    category = req_body["category"]
    limit = req_body["limit"]

    # Flag for whether this is a comment thread or a general subreddit
    is_comment = False

    if "reddit.com" in reddit_str:
        # Check that this is a subreddit. Otherwise, return error
        if "/r/" not in reddit_str:
            raise Exception("/r/ not in URL")

        # Check whether this is a comment thread. (in this case, the string is always an URL)
        if "/comments/" in reddit_str:
            is_comment = True

        # Get subreddit name
        # Look for 'r' and the next element should be subreddit
        if not is_comment:
            split_path = reddit_str.split('/')
            for index, path in enumerate(split_path):
                if path == "r":
                    reddit_str = split_path[index + 1]
                    break

    if not is_comment:
        # Get url for subreddit
        url = "https://oauth.reddit.com/r/{}/{}.json?limit={}".format(
            reddit_str.lower(), category.lower(), limit)
    else:
        # Get url for comment
        split_path = reddit_str.split('/')
        for index, path in enumerate(split_path):
            if path == "r":
                split_path[index - 1] = "oauth.reddit.com"
                break
        url = '/'.join(split_path) + \
            ".json?limit={}&sort={}".format(limit, category)

    header = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": f"bearer {access_token}",
        "User-Agent": "Reddit-sentiment (by /u/macaronidonkey)"
    }
    r = requests.get(url, headers=header).json()

    # If error in reddit response, return
    if "error" in r:
        raise Exception("Error in reddit response")

    # If subreddit DNE
    if not is_comment and len(r["data"]["children"]) == 0:
        raise Exception("Subreddit Doesn't Exist")

    # Get subreddit name or post name
    if is_comment:
        title = r[0]["data"]["children"][0]["data"]["subreddit"] + \
            ": " + r[0]["data"]["children"][0]["data"]["title"]
    else:
        title = r["data"]["children"][0]["data"]["subreddit"]

    texts = []
    # If comment, add the title and post
    # Then, only take the second arr ele
    if is_comment:
        title = clean_text(add_sentence_end(
            r[0]["data"]["children"][0]["data"]["title"]))
        selftext = r[0]["data"]["children"][0]["data"]["selftext"]
        if selftext != "":
            selftext = clean_text(add_sentence_end(selftext))
        texts.append(title + selftext)

        r = r[1]

    for eachEle in r["data"]["children"]:
        # Also includes title
        # Parse main text. Remove any links or &amp;...;
        # Remove non-english letters

        if is_comment:
            # If not comment type, exit
            if eachEle["kind"] != "t1":
                break

            main_text = clean_text(add_sentence_end(eachEle["data"]["body"]))
        else:
            main_text = add_sentence_end(eachEle["data"]["title"]) + \
                eachEle["data"]["selftext"]

        texts.append(clean_text(main_text))

        # If comment, get all subcomments
        if is_comment:
            texts.extend(get_children_text(eachEle))

    return (title, texts)


def clean_text(string):
    # Remove unicode
    string = re.sub(r'[^\x00-\x7f]', r'', string)
    # Remove links
    string = re.sub(r'\[([^\[\]]*)\]\([^\(\)]*\)', r'\1',
                    string)
    # Remove &xyz;xyz;
    string = re.sub(r'&[a-zA-Z]+;[^;]+;', '', string)
    return string


def get_children_text(element):
    cur_list = []
    replies = element["data"]["replies"]
    if replies != "":
        for child_element in replies["data"]["children"]:
            if child_element["kind"] == "t1" and not child_element["data"]["no_follow"]:
                cur_list.append(add_sentence_end(
                    child_element["data"]["body"]))
                cur_list.extend(get_children_text(child_element))

    return cur_list


def add_sentence_end(sentence):
    # If the sentence doesn't end with proper terminal point
    list_of_terminals = ['.', '?', '!']
    if any(x in sentence[-2:] for x in list_of_terminals):
        return sentence
    return sentence + '. '
