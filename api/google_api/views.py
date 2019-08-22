from django.shortcuts import render
from django.http import JsonResponse
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import requests
import base64
import json

# Create your views here.


def sentiment_view(request):
    # Gets info from reddit and sends to google api, then returns sentiment

    # Loads necessary vars (sent from frontend POST req)
    req_body = json.loads(request.body.decode("utf-8"))
    access_token = req_body["access_token"]
    url = req_body["url"]

    header = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": f"bearer {access_token}",
        "User-Agent": "Reddit-sentiment (by /u/macaronidonkey)"
    }
    r = requests.get(url, headers=header).json()

    # If error in reddit response, return
    if "error" in r:
        return JsonResponse(r)

    texts = []
    for eachEle in r["data"]["children"]:
        texts.append(eachEle["data"]["selftext"])

    client = language.LanguageServiceClient()

    sentiment_dict = {}
    # Repeat for each text
    for idx, text in enumerate(texts):
        document = types.Document(
            content=text, type=enums.Document.Type.PLAIN_TEXT)

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
