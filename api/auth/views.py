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
    base_url = request.build_absolute_uri('/')[:-1]
    body = f"grant_type=authorization_code&code={code}&redirect_uri={base_url}"
    # Client id for reddit app
    client_id = "4YzuQQE-yhj8wQ"

    # Prepare id and secret
    auth_str = base64.b64encode(
        bytes(f"{client_id}:{secret}", "ISO-8859-1")).decode("ascii")

    header = {"Content-Type": "application/x-www-form-urlencoded",
              "Authorization": f"Basic {auth_str}",
              "User-Agent": "Reddit-sentiment (by /u/macaronidonkey)"}
    r = requests.post("https://www.reddit.com/api/v1/access_token",
                      headers=header, data=body)

    if "access_token" in r.json():
        access_token = r.json()["access_token"]
        error_flag = False
    else:
        access_token = "ERROR FOUND. ACCESS_TOKEN NOT AVAILABLE."
        error_flag = True

    # Error flag for frontend to confirm that access token is correct
    return JsonResponse({"access_token": access_token, "error": error_flag})


def reddit_view(request):
    return render(request, "home.html", {})
