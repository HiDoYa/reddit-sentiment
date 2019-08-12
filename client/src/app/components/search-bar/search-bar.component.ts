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
  current_timeframe: string = "Of All Time";
  timeframes = ["Past Hour", "Past 24 Hours", "Past Week", "Past Month", "Past Year", "Of All Time"];
  categories = ["Hot", "Top", "New"];

  constructor(private redditAuthService: RedditAuthService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.current_category, this.current_timeframe, this.current_subreddit);
    // this.redditAuthService.authorize("teamsolomid");
  }

  onClickCategory(category: string) {
    this.current_category = category;
  }

  onClickTimeframe(timeframe: string) {
    this.current_timeframe = timeframe;
  }
}
