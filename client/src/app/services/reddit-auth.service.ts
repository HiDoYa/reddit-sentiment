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
    console.log("Get_token");
    if (window.location.search !== "") {
      // If already authorized, parse the link
      let parsedTree = this.urlSerializer.parse(window.location.search);
      if ("error" in parsedTree.queryParams) {
        // Error was found
        console.log(parsedTree.queryParams.error);
        return;
      }

      // ? Can check if state is correct
      // let state = parsedTree.queryParams.state;

      // Content-Type: application/x-www-form-urlencoded
      // Retrieve access token
      let code = parsedTree.queryParams.code;
      let body = `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:4200`;

      let client_id = "4YzuQQE-yhj8wQ";
      // ! Hide this somewhere and import it in?
      let secret = "rggbYjWuwr3mkd8Fquh30i0hSM4";
      let header = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(`${client_id}:${secret}`)
      });

      this.httpClient.post("https://www.reddit.com/api/v1/access_token", body, { headers: header }).subscribe(res => {
        console.log(res["access_token"]);
        this.access_token = res["access_token"];
      });
    } else {
      window.location.replace(
        `https://www.reddit.com/api/v1/authorize?` +
          `client_id=4YzuQQE-yhj8wQ` +
          `&response_type=code` +
          `&state=state` +
          `&redirect_uri=http://localhost:4200` +
          `&duration=temporary` +
          `&scope=read`
      );
    }
  }

  getJson(subreddit: string, category: string) {
    let header = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `bearer ${this.access_token}`
    });

    this.httpClient
      .get(`https://oauth.reddit.com/r/${subreddit.toLowerCase()}/${category.toLowerCase()}.json?limit=100`, {
        headers: header
      })
      .subscribe(res => {
        console.log(res);
        return res;
      });
  }
}
