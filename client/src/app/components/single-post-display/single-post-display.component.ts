import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { colorize } from "../../utility/color";

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

  color(num: number) {
    return colorize(num);
  }
}
