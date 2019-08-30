import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-info-display",
  templateUrl: "./info-display.component.html",
  styleUrls: ["./info-display.component.scss"]
})
export class InfoDisplayComponent implements OnChanges, OnInit {
  @Input() rawInfo: Object;
  @Input() loading: boolean;

  showInfo = false;
  magnitudeSum: Number;
  scoreSum: Number;
  filteredInfo: Array<Object>;

  constructor() {}

  ngOnInit() {}

  isEmpty(obj: Object) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  ngOnChanges() {
    if (!this.isEmpty(this.rawInfo)) {
      this.showInfo = true;
      console.log(this.rawInfo);

      //TODO Also calculate the average

      // Reset
      this.magnitudeSum = 0;
      this.scoreSum = 0;
      this.filteredInfo = [];

      // Add to sums and filter for substantive data
      Object.keys(this.rawInfo).forEach(key => {
        this.scoreSum += this.rawInfo[key]["overall_score"];
        this.magnitudeSum += this.rawInfo[key]["overall_magnitude"];
        if (this.rawInfo[key]["detail"].length !== 0) {
          this.filteredInfo.push(this.rawInfo[key]);
        }
      });
    }
  }
}
