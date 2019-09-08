import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UrlSerializer } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class RedditAuthService {
  access_token: string = "ERROR FOUND. AUTHENTICATE BELOW.";

  constructor(private httpClient: HttpClient, private urlSerializer: UrlSerializer, private cookieService: CookieService) {
    this.getToken();
  }

  resetCookie() {
    this.cookieService.deleteAll();
  }

  getToken() {
    // If accesstoken stored in cookie service and less than 1 hour passed, use that accesstoken
    let dateCookie = this.cookieService.get("date") == "" ? 0 : parseInt(this.cookieService.get("date"));
    let currentDate = new Date();
    let dateNow = currentDate.getTime() / 1000;

    // If around 90% of an hour has passed since last access_token, just get a new access token
    // If not, use the cookie's access token
    if ((dateNow - dateCookie) / 3600 < 0.9 && this.cookieService.get("access_token") !== "") {
      // Use cookie's access token
      this.access_token = this.cookieService.get("access_token");
    } else if (window.location.search !== "") {
      this.getAccessToken();
    }
  }

  getAccessToken() {
    // If already authorized (user logged into reddit), parse the link
    let parsedTree = this.urlSerializer.parse(window.location.search);

    // If links has error, return
    if ("error" in parsedTree.queryParams) {
      this.cookieService.set("access_token", "ERROR FOUND. AUTHENTICATE BELOW");
      window.location.assign("../");
    }

    // Parse code and send to backend for authorization
    let code = parsedTree.queryParams.code;

    this.httpClient.get(`/api/auth?code=${code}`).subscribe(res => {
      let currentDate = new Date();
      let secondsPassed = currentDate.getTime() / 1000;

      if (res["access_token"].includes("ERROR")) {
        this.cookieService.set("date", "0");
        this.cookieService.set("access_token", "");
      } else {
        this.cookieService.set("date", secondsPassed.toString());
        this.cookieService.set("access_token", res["access_token"]);
      }

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
  getAnalyze(reddit_str: string, category: string) {
    let body = {
      reddit_str: reddit_str,
      category: category,
      access_token: this.access_token
    };

    return this.httpClient.post("/api/analyze", body);
  }
}
