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
}
