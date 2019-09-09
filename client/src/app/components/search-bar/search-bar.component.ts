import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { RedditAuthService } from "../../services/reddit-auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  @Input() loading: boolean;

  @Output() onRawInfo = new EventEmitter<Object>();
  @Output() onLoading = new EventEmitter<Boolean>();
  @Output() onError = new EventEmitter<Boolean>();
  @Output() onErrorStr = new EventEmitter<Boolean>();
  @Output() onRedditTitle = new EventEmitter<string>();

  current_reddit: string = "";
  current_category: string = "Top";
  current_limit = 5;
  categories = ["Hot", "Top", "New"];
  limits = [5, 10, 20, 50];

  constructor(private redditAuthService: RedditAuthService) {}

  ngOnInit() {}

  onSubmit() {
    // If already loading, don't do anything
    if (this.loading) {
      return;
    }

    // Send request
    let promise: Observable<Object> = this.redditAuthService.getAnalyze(
      this.current_reddit,
      this.current_category,
      this.current_limit
    );

    // Currently loading
    this.onLoading.emit(true);
    this.onError.emit(false);

    // When request done, send to parent
    promise.subscribe(res => {
      if (res["error"]) {
        this.onError.emit(true);
        this.onErrorStr.emit(res["error"]);
        this.onLoading.emit(false);
      } else {
        this.onError.emit(false);
        this.onRawInfo.emit(res["sentiment_dict"]);
        this.onRedditTitle.emit(res["title"]);
        this.onLoading.emit(false);
      }
    });
  }

  disableClick() {
    return this.loading || this.redditAuthService.access_token.includes("ERROR");
  }
}
