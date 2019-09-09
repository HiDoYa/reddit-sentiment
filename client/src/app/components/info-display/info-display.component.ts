import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { colorize } from "../../utility/color";

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
  @Input() errorStr: string;

  showInfo = false;
  scoreAvg: number;
  filteredInfo: Array<Object>;

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
    if (this.loading) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }

    if (!this.isEmpty(this.rawInfo)) {
      this.showInfo = true;

      // Reset
      let scoreSum = 0;
      let numberTotal = 0;
      this.filteredInfo = [];

      // Add to sums and filter for substantive data
      Object.keys(this.rawInfo).forEach(key => {
        // Check that the data is not empty
        if (this.rawInfo[key]["detail"].length !== 0) {
          this.filteredInfo.push(this.rawInfo[key]["detail"]);
          numberTotal++;
          scoreSum += this.rawInfo[key]["overall_score"];
        }
      });

      this.scoreAvg = scoreSum / numberTotal;
    }
  }

  color(num: number) {
    return colorize(num);
  }
}
