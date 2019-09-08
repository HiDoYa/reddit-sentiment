import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-info-display",
  templateUrl: "./info-display.component.html",
  styleUrls: ["./info-display.component.scss"]
})
export class InfoDisplayComponent implements OnChanges, OnInit {
  @Input() rawInfo: Object;
  @Input() redditTitle: string;
  @Input() loading: boolean;
  @Input() error: boolean = false;

  showInfo = false;
  magnitudeAvg: number;
  scoreAvg: number;
  filteredInfo: Array<Object>;
  lastError = false;

  constructor(private spinner: NgxSpinnerService) {}

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
    this.lastError = this.error;

    if (this.loading) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }

    if (!this.isEmpty(this.rawInfo)) {
      this.showInfo = true;
      console.log(this.rawInfo);

      // Reset
      let magnitudeSum = 0;
      let scoreSum = 0;
      let numberTotal = 0;
      this.filteredInfo = [];

      // Add to sums and filter for substantive data
      Object.keys(this.rawInfo).forEach(key => {
        // Check that the data is not empty
        if (this.rawInfo[key]["detail"].length !== 0) {
          this.filteredInfo.push(this.rawInfo[key]);
          numberTotal++;
          scoreSum += this.rawInfo[key]["overall_score"];
          magnitudeSum += this.rawInfo[key]["overall_magnitude"];
        }
      });

      this.scoreAvg = scoreSum / numberTotal;
      this.magnitudeAvg = magnitudeSum / numberTotal;
    }
  }
}
