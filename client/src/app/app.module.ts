import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { OptionsComponent } from "./components/options/options.component";
import { HttpClient } from "selenium-webdriver/http";

@NgModule({
  declarations: [AppComponent, SearchBarComponent, OptionsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
