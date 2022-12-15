import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AboutPage} from "./About/about.component";
import {HomePage} from "./Home/home.component";
import {HeaderComponent} from "./Header/header.component";
import {NotFound} from "./NotFound/notfound.component";
import {AllPlants} from "./Plants/plants.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlantsPage } from './PlantPage/plantpage.component';
import  {PlantsPart} from './PlantsPart/plantspart.component';


//список путей SPA
const routers: Routes = [
  {path: "", component: HomePage},
  {path: "about", component: AboutPage},
  {path: "all", component: AllPlants},
  { path: "plant/:id", component: PlantsPage },
  {path: "**", component: NotFound},



]


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    AboutPage,
    AllPlants,
    PlantsPart,
    NotFound,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(routers),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
