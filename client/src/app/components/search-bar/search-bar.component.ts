import { Component, OnInit } from "@angular/core";
import { RedditAuthService } from "../../services/reddit-auth.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  current_subreddit: string = "";
  constructor(private redditAuthService: RedditAuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.redditAuthService.authorize("teamsolomid");
  }
}
