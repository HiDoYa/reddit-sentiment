from django.shortcuts import render
from django.http import JsonResponse
import base64
import requests
import json
import os

# Create your views here.


def auth_view(request):
    code = request.GET.get("code", "")
    secret = os.environ.get('REDDIT_SECRET', '')
    body = "grant_type=authorization_code&code={}&redirect_uri={}".format(
        code, request.build_absolute_uri(''))
    client_id = "4YzuQQE-yhj8wQ"
    header = {"Content-Type": "application/x-www-form-urlencoded",
              "Authorization": "Basic %s" % ("{}:{}".format(client_id, secret)).encode("utf-8")}
    r = requests.get("https://www.reddit.com/api/v1/access_token",
                     headers=header, data=body)
    print(r.json())

    if "access_token" in r.json():
        access_token = r.json()["access_token"]
    else:
        access_token = "ERROR FOUND. ACCESS_TOKEN NOT AVAILABLE."
    print(access_token)
    return JsonResponse({"access_token": access_token})


def reddit_view(request):
    return render(request, "home.html", {})


def reddit_info_view(request):
    # TODO Should request json data from reddit here (instead of requesting diretly from frontend.)
    # TODO Then, don't need to save access key in front end.
    print("RUN")
