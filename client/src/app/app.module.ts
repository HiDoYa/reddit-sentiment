import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { InfoDisplayComponent } from "./components/info-display/info-display.component";
import { SinglePostDisplayComponent } from "./components/single-post-display/single-post-display.component";

@NgModule({
  declarations: [AppComponent, SearchBarComponent, InfoDisplayComponent, SinglePostDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, CommonModule, FormsModule, NgxSpinnerModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
