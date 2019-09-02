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
    texts = fetch_posts(request)

    # Check if reddit fetch had error
    if texts == "err":
        return JsonResponse({"err": "err"})

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
                                  "magnitude": sentence.sentiment.magnitude,
                                  "score": sentence.sentiment.score})

        sentiment_dict.update({idx: {"overall_score": sentiment.document_sentiment.score,
                                     "overall_magnitude": sentiment.document_sentiment.magnitude,
                                     "detail": arr_sentences}})

    return JsonResponse(sentiment_dict)


def fetch_posts(request):
    # Util function
    # Gets info from reddit

    # Loads necessary vars (sent from frontend POST req)
    req_body = json.loads(request.body.decode("utf-8"))
    access_token = req_body["access_token"]
    subreddit = req_body["subreddit"]
    category = req_body["category"]

    if "reddit.com" in subreddit:
        # Check that this is a subreddit. Otherwise, return error
        if "/r/" not in subreddit:
            return "err"

        # Get subreddit name
        # Look for 'r' and the next element should be subreddit
        split_path = subreddit.split('/')
        for index, path in enumerate(split_path):
            if path == "r":
                subreddit = split_path[index + 1]
                break

    url = "https://oauth.reddit.com/r/{}/{}.json?limit=100".format(
        subreddit.lower(), category.lower())

    header = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": f"bearer {access_token}",
        "User-Agent": "Reddit-sentiment (by /u/macaronidonkey)"
    }
    r = requests.get(url, headers=header).json()

    # If error in reddit response, return
    if "error" in r:
        return "err"

    texts = []
    for eachEle in r["data"]["children"]:
        # Also includes title
        # Parse main text. Remove any links or &amp;...;
        # Remove non-english letters
        main_text = eachEle["data"]["title"] + \
            '. ' + eachEle["data"]["selftext"]
        main_text = re.sub(r'[^\x00-\x7f]', r'', main_text)
        main_text = re.sub(r'\[([^\[\]]*)\]\([^\(\)]*\)', r'\1',
                           main_text)
        main_text = re.sub(r'&amp;[^;]*;', '', main_text)
        texts.append(main_text)

    return texts
