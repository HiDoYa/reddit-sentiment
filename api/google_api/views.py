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
        texts = fetch_posts(request)
    except(...):
        return JsonResponse({"error": "error"})

    # Check if reddit fetch had error
    if texts == "error":
        return JsonResponse({"error": "error"})

    client = language.LanguageServiceClient()

    sentiment_dict = {}
    # Repeat for each text
    for idx, text in enumerate(texts):
        document = types.Document(
            content=text,
            language="EN",
            type=enums.Document.Type.PLAIN_TEXT)

        try:
            sentiment = client.analyze_sentiment(document=document)
        except(...):
            return JsonResponse({"error": "error"})

        # Convert object to dict
        arr_sentences = []
        for sentence in sentiment.sentences:
            arr_sentences.append({"text": sentence.text.content,
                                  "magnitude": sentence.sentiment.magnitude,
                                  "score": sentence.sentiment.score})

        sentiment_dict.update({idx: {"overall_score": sentiment.document_sentiment.score,
                                     "overall_magnitude": sentiment.document_sentiment.magnitude,
                                     "detail": arr_sentences}})

    return JsonResponse(sentiment_dict)


def fetch_posts(request):
    # Gets info from reddit

    # Loads necessary vars (sent from frontend POST req)
    req_body = json.loads(request.body.decode("utf-8"))
    access_token = req_body["access_token"]
    reddit_str = req_body["reddit_str"]
    category = req_body["category"]

    # Flag for whether this is a comment thread or a general subreddit
    is_comment = False

    if "reddit.com" in reddit_str:
        # Check that this is a subreddit. Otherwise, return error
        if "/r/" not in reddit_str:
            return "error"

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
        url = "https://oauth.reddit.com/r/{}/{}.json?limit=50".format(
            reddit_str.lower(), category.lower())
    else:
        # Get url for comment
        split_path = reddit_str.split('/')
        for index, path in enumerate(split_path):
            if path == "r":
                split_path[index - 1] = "oauth.reddit.com"
                break
        url = '/'.join(split_path) + ".json?limit=50?sort=" + category

    header = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": f"bearer {access_token}",
        "User-Agent": "Reddit-sentiment (by /u/macaronidonkey)"
    }
    r = requests.get(url, headers=header).json()

    # If error in reddit response, return
    if "error" in r:
        return "error"

    # If subreddit DNE
    if not is_comment and len(r["data"]["children"]) == 0:
        return "error"

    texts = []
    # If comment, only take the second arr ele
    if is_comment:
        r = r[1]

    for eachEle in r["data"]["children"]:
        # Also includes title
        # Parse main text. Remove any links or &amp;...;
        # Remove non-english letters

        if is_comment:
            # If not comment type, exit
            if eachEle["kind"] != "t1":
                break

            main_text = add_sentence_end(eachEle["data"]["body"]) + \
                get_children_text(eachEle)
        else:
            main_text = add_sentence_end(eachEle["data"]["title"]) + \
                eachEle["data"]["selftext"]

        main_text = re.sub(r'[^\x00-\x7f]', r'', main_text)
        main_text = re.sub(r'\[([^\[\]]*)\]\([^\(\)]*\)', r'\1',
                           main_text)
        main_text = re.sub(r'&[a-zA-Z]+;[^;]+;', '', main_text)
        texts.append(main_text)

    return texts


def get_children_text(element):
    # cur_list = []
    cur_string = ""
    replies = element["data"]["replies"]
    if replies != "":
        for child_element in replies["data"]["children"]:
            if child_element["kind"] == "t1" and not child_element["data"]["no_follow"]:
                cur_string += add_sentence_end(child_element["data"]["body"])
                cur_string += get_children_text(child_element)

    return cur_string


def add_sentence_end(sentence):
    # If the sentence doesn't end with proper terminal point
    list_of_terminals = ['.', '?', '!']
    if any(x in sentence[-2:] for x in list_of_terminals):
        return sentence + '. '
    return sentence
