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
    // From green to red
    let colors = ["#20df00", "#40bf00", "#609f00", "#a9aea2", "#a9aea2", "#fb6969", "#e6482d", "#ff0000"];

    // Range:
    // inf to 0.75
    // 0.75 to 0.50
    // 0.50 to 0.25
    // 0.25 to 0.00
    // 0.00 to -0.25
    // -0.25 to -0.50
    // -0.50 to -0.75
    // -0.75 to inf

    if (num > 0.75) {
      return colors[0];
    } else if (num > 0.5) {
      return colors[1];
    } else if (num > 0.25) {
      return colors[2];
    } else if (num > 0) {
      return colors[3];
    } else if (num > -0.25) {
      return colors[4];
    } else if (num > -0.5) {
      return colors[5];
    } else if (num > -0.75) {
      return colors[6];
    } else {
      return colors[7];
    }
  }
}
