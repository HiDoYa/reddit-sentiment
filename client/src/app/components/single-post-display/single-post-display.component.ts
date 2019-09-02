import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-single-post-display",
  templateUrl: "./single-post-display.component.html",
  styleUrls: ["./single-post-display.component.scss"]
})
export class SinglePostDisplayComponent implements OnInit, OnChanges {
  @Input() postData: Object;

  titleData: Object;
  bodyData: Array<Object>;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    // Split postData into title and normal text
    this.titleData = this.postData[0];
    this.bodyData = JSON.parse(JSON.stringify(this.postData));
    this.bodyData.shift();
  }

  colorize(num: Number) {
    let colors = ["#20df00", "#40bf00", "#609f00", "#7f8000", "#9f6000", "#bf4000", "#df2000"];
    if (num < -1) {
      return colors[6];
    } else if (num < -0.6) {
      return colors[5];
    } else if (num < -0.3) {
      return colors[4];
    } else if (num < 0) {
      return colors[3];
    } else if (num < 0.3) {
      return colors[2];
    } else if (num < 0.6) {
      return colors[1];
    } else {
      return colors[0];
    }
  }
}
