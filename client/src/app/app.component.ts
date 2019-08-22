import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: string = "Reddit Sentiment";
  rawInfo: Object;
  loading = false;

  // Getting sentient analysis info
  onSentimentInfo(info: Object) {
    this.rawInfo = info;
  }

  // If loading
  onLoading(loading: boolean) {
    this.loading = loading;
  }
}
