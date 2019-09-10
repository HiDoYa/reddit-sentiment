import { Component, OnInit } from "@angular/core";
import { RedditAuthService } from "../../services/reddit-auth.service";

@Component({
  selector: "app-main-display",
  templateUrl: "./main-display.component.html",
  styleUrls: ["./main-display.component.scss"]
})
export class MainDisplayComponent implements OnInit {
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
