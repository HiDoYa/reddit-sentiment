import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UrlSerializer } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RedditAuthService {
  constructor(private httpClient: HttpClient, private urlSerializer: UrlSerializer) {}

  authorize(subreddit: string) {
    if (window.location.search === "") {
      // If not yet authorized, redirect to reddit (to authorize)
      window.location.replace(
        `https://www.reddit.com/api/v1/authorize?` +
          `client_id=muT2ZryQBZpbSA` +
          `&response_type=code` +
          `&state=state` +
          `&redirect_uri=http:/localhost:4200` +
          `&duration=temporary` +
          `&scope=read`
      );
    } else {
      // If already authorized, parse the link
      let parsedTree = this.urlSerializer.parse(window.location.search);
      if ("error" in parsedTree.queryParams) {
        // Error was found
        console.log(parsedTree.queryParams.error);
        return;
      }

      // Need some way to check state is correct?
      // let state = parsedTree.queryParams.state;

      // Content-Type: application/x-www-form-urlencoded
      // Retrieve access token
      let code = parsedTree.queryParams.code;
      // let body = {
      //   grant_type: "authorization_code",
      //   code: code,
      //   redirect_uri: "http://localhost:4200"
      // };
      let header = new HttpHeaders();
      header.set("Content-Type", "application/x-www-form-urlencoded");
      // header.set("Accept", "application/json");

      let body = `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:4200`;
      this.httpClient
        .post("https://www.reddit.com/api/v1/access_token", body, { headers: header })
        .subscribe(res => console.log(res));
    }

    // this.httpClient.get(`https://www.reddit.com/r/${subreddit}/top.json?limit=100?t=all`).subscribe(res => {
    //   console.log(res);
    // });
  }
}
