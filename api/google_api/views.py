from django.shortcuts import render
from django.http import JsonResponse
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

# Create your views here.


def sentiment_view(request):
    print(request.user)

    # Loads text
    text = request.body.decode('utf-8')

    client = language.LanguageServiceClient()
    document = types.Document(
        content=text, type=enums.Document.Type.PLAIN_TEXT)

    sentiment = client.analyze_sentiment(document=document)

    # Convert object to dict
    arr_sentences = []
    for sentence in sentiment.sentences:
        arr_sentences.append({"text": sentence.text.content,
                              "magnitude": sentence.sentiment.magnitude, "score": sentence.sentiment.score})

    sentiment_dict = {"overall_score": sentiment.document_sentiment.score,
                      "overall_magnitude": sentiment.document_sentiment.magnitude, "detail": arr_sentences}

    return JsonResponse(sentiment_dict)
