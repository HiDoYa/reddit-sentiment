import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UrlSerializer } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class RedditAuthService {
  access_token: string = "";

  constructor(private httpClient: HttpClient, private urlSerializer: UrlSerializer, private cookieService: CookieService) {
    this.getToken();
  }

  getToken() {
    // If accesstoken stored in cookie service and less than 1 hour passed, use that accesstoken
    let dateCookie = parseInt(this.cookieService.get("date"));

    let currentDate = new Date();
    let dateNow = currentDate.getTime() / 1000;

    // If around 90% of an hour has passed since last access_token, just get a new access token
    // If not, use the cookie's access token
    if ((dateNow - dateCookie) / 3600 < 0.9 && this.cookieService.get("access_token") !== "") {
      // Use cookie's access token
      this.access_token = this.cookieService.get("access_token");
    } else if (window.location.search !== "") {
      this.getAccessToken();
    } else {
      // Need to authenticate
      this.gotoRedditOauth();
    }
  }

  getAccessToken() {
    // If already authorized (user logged into reddit), parse the link
    let parsedTree = this.urlSerializer.parse(window.location.search);
    if ("error" in parsedTree.queryParams) {
      this.access_token = "ERROR.";
      return;
    }
    // Parse code and send to backend for authorization
    let code = parsedTree.queryParams.code;

    this.httpClient.get(`/api/auth?code=${code}`).subscribe(res => {
      let currentDate = new Date();
      let secondsPassed = currentDate.getTime() / 1000;
      this.cookieService.set("access_token", res["access_token"]);
      this.cookieService.set("date", secondsPassed.toString());

      // Redirect to mainpage
      window.location.assign("../");
    });
  }

  gotoRedditOauth() {
    window.location.replace(
      `https://www.reddit.com/api/v1/authorize?` +
        `client_id=4YzuQQE-yhj8wQ` +
        `&response_type=code` +
        `&state=state` +
        `&redirect_uri=${window.location.origin}` +
        `&duration=temporary` +
        `&scope=read`
    );
  }

  // Calls backend to get reddit data and analyze
  getAnalyze(subreddit: string, category: string) {
    let body = {
      subreddit: subreddit,
      category: category,
      access_token: this.access_token
    };

    return this.httpClient.post("/api/analyze", body);
  }
}
