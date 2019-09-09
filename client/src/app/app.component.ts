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
  error = false;
  errorStr: string;
  redditTitle: string;
  showDescription = false;

  constructor(private redditAuthService: RedditAuthService) {}

  ngOnInit() {}

  onReauthClick() {
    this.redditAuthService.resetCookie();
    this.redditAuthService.gotoRedditOauth();
  }

  // Getting sentient analysis info
  onRawInfo(info: Object) {
    this.rawInfo = info;
  }

  // If loading
  onLoading(loading: boolean) {
    this.loading = loading;
  }

  onRedditTitle(redditTitle: string) {
    this.redditTitle = redditTitle;
  }

  onError(error: boolean) {
    this.error = error;
  }

  onErrorStr(errorStr: string) {
    this.errorStr = errorStr;
  }
}
