import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainDisplayComponent } from "./components/main-display/main-display.component";
import { AboutDisplayComponent } from "./components/about-display/about-display.component";

const routes: Routes = [
  { path: "", component: MainDisplayComponent, pathMatch: "full" },
  {
    path: "about",
    component: AboutDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
