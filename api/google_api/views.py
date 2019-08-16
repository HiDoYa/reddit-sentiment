from django.shortcuts import render
from django.http import JsonResponse
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import requests

# Create your views here.


def sentiment_view():
    client = language.LanguageServiceClient()
    text = "Hello world"
    document = types.Document(
        content=text, type=enums.Document.Type.PLAIN_TEXT)

    sentiment = client.analyze_sentiment(document=document)
    print(sentiment)
    return JsonResponse(sentiment)
