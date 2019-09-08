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

  @Output() onSentimentInfo = new EventEmitter<Object>();
  @Output() onLoading = new EventEmitter<Boolean>();
  @Output() onError = new EventEmitter<Boolean>();
  @Output() onRedditTitle = new EventEmitter<string>();

  current_reddit: string = "";
  current_category: string = "Top";
  categories = ["Hot", "Top", "New"];

  constructor(private redditAuthService: RedditAuthService) {}

  ngOnInit() {}

  onSubmit() {
    // If already loading, don't do anything
    if (this.loading) {
      return;
    }

    // Send request
    let promise: Observable<Object> = this.redditAuthService.getAnalyze(this.current_reddit, this.current_category);

    // Currently loading
    this.onLoading.emit(true);
    this.onError.emit(false);
    this.onRedditTitle.emit(this.current_reddit);

    // When request done, send to parent
    promise.subscribe(res => {
      if (res["error"]) {
        this.onError.emit(true);
        this.onLoading.emit(false);
      } else {
        this.onError.emit(false);
        this.onSentimentInfo.emit(res);
        this.onLoading.emit(false);
      }
    });
  }

  onClickCategory(category: string) {
    this.current_category = category;
  }

  disableClick() {
    return this.loading || this.redditAuthService.access_token.includes("ERROR");
  }
}
