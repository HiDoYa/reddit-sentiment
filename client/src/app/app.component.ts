import { Component, OnInit } from "@angular/core";
import { RedditAuthService } from "./services/reddit-auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title: string = "Reddit Sentiment";
  rawInfo: Object;
  loading = false;
  redditTitle: string;

  constructor(private redditAuthService: RedditAuthService) {}

  ngOnInit() {}

  onReauthClick() {
    this.redditAuthService.gotoRedditOauth();
  }

  // Getting sentient analysis info
  onSentimentInfo(info: Object) {
    this.rawInfo = info;
  }

  // If loading
  onLoading(loading: boolean) {
    this.loading = loading;
  }

  onRedditTitle(redditTitle: string) {
    this.redditTitle = redditTitle;
  }
}
