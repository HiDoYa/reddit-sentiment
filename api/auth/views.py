from django.shortcuts import render
from django.http import JsonResponse
import os

# Create your views here.


def secret_view(request):
    secret = os.environ.get('REDDIT_SECRET', '')
    return JsonResponse({"secret": secret})


def reddit_view(request):
    return render(request, "home.html", {})
