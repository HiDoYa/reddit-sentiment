import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-info-display",
  templateUrl: "./info-display.component.html",
  styleUrls: ["./info-display.component.scss"]
})
export class InfoDisplayComponent implements OnInit {
  @Input() rawInfo: Object;
  @Input() loading: boolean;

  constructor() {}

  ngOnInit() {}
}
