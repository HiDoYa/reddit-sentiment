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
  magnitudeSum: number;
  scoreSum: number;
  magnitudeAvg: number;
  scoreAvg: number;
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

      // Reset
      this.magnitudeSum = 0;
      this.scoreSum = 0;
      let numberTotal = 0;
      this.filteredInfo = [];

      // Add to sums and filter for substantive data
      Object.keys(this.rawInfo).forEach(key => {
        if (this.rawInfo[key]["detail"].length !== 0) {
          this.filteredInfo.push(this.rawInfo[key]);
          numberTotal++;
          this.scoreSum += this.rawInfo[key]["overall_score"];
          this.magnitudeSum += this.rawInfo[key]["overall_magnitude"];
        }
      });

      this.scoreAvg = this.scoreSum / numberTotal;
      this.magnitudeAvg = this.magnitudeSum / numberTotal;
    }
  }
}
