import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-single-post-display",
  templateUrl: "./single-post-display.component.html",
  styleUrls: ["./single-post-display.component.scss"]
})
export class SinglePostDisplayComponent implements OnInit {
  @Input() postData: Object;

  constructor() {}

  ngOnInit() {}

  formatTooltip(data: Object) {
    return `Score: ${data["score"].toFixed(4)}
    Magnitude: ${data["magnitude"].toFixed(4)}`;
  }

  // TODO Add gradient of colors (based on arr?)
  colorize(num: Number) {
    if (num < 0) {
      return "red";
    } else {
      return "green";
    }
  }
}
