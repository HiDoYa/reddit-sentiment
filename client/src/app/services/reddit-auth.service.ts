import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RedditAuthService {
  constructor(private httpClient: HttpClient) {}

  get_reddit_json(subreddit) {
    console.log("Running");
    this.httpClient.get(`https://www.reddit.com/r/${subreddit}/top.json?limit=100`).subscribe(res => {
      console.log(res);
    });
  }
}
