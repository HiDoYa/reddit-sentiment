import { Component, OnInit } from "@angular/core";
import { RedditAuthService } from "../../services/reddit-auth.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  current_subreddit: string = "";
  current_category: string = "Top";
  categories = ["Hot", "Top", "New"];

  constructor(private redditAuthService: RedditAuthService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.current_category, this.current_subreddit);
    let ret = this.redditAuthService.getJson(this.current_subreddit, this.current_category);
  }

  onClickCategory(category: string) {
    this.current_category = category;
  }
}
