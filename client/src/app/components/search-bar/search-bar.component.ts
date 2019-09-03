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

  @Output() sentimentInfo = new EventEmitter<Object>();
  @Output() onLoading = new EventEmitter<Boolean>();
  @Output() subredditTitle = new EventEmitter<string>();

  current_subreddit: string = "";
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
    let promise: Observable<Object> = this.redditAuthService.getAnalyze(this.current_subreddit, this.current_category);

    // Currently loading
    this.onLoading.emit(true);
    this.subredditTitle.emit(this.current_subreddit);

    // When request done, send to parent
    promise.subscribe(res => {
      this.sentimentInfo.emit(res);
      this.onLoading.emit(false);
    });
  }

  onClickCategory(category: string) {
    this.current_category = category;
  }
}
