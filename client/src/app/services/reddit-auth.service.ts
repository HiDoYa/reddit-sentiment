import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UrlSerializer } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RedditAuthService {
  access_token: string;

  constructor(private httpClient: HttpClient, private urlSerializer: UrlSerializer) {
    this.getToken();
  }

  getToken() {
    if (window.location.search !== "") {
      // If already authorized (user logged into reddit), parse the link
      let parsedTree = this.urlSerializer.parse(window.location.search);
      if ("error" in parsedTree.queryParams) {
        // Error was found
        console.log(parsedTree.queryParams.error);
        return;
      }
      // Parse code and send to backend for authorization
      let code = parsedTree.queryParams.code;
      console.log("Requesting access token with code: " + code);

      this.httpClient.get(`/api/auth?code=${code}`).subscribe(res => {
        console.log("Access token: " + res["access_token"]);
        this.access_token = res["access_token"];
      });
    } else {
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
  }

  // Calls backend to get reddit data and analyze
  getAnalyze(subreddit: string, category: string) {
    let url = `https://oauth.reddit.com/r/${subreddit.toLowerCase()}/${category.toLowerCase()}.json?limit=100`;
    let body = {
      url: url,
      access_token: this.access_token
    };

    return this.httpClient.post("/api/analyze", body);
  }
}
