import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PlanetService } from './services/planet-service.service';
import { ListOfPlanetsComponent } from './main-app/list-of-planets/list-of-planets.component';
import { DetailOfPlanetComponent } from './main-app/detail-of-planet/detail-of-planet.component';
import { HeaderOfPlanetsComponent } from './main-app/header-of-planets/header-of-planets.component';
import { NgxPaginationModule } from "ngx-pagination";
import { Routes, RouterModule } from "@angular/router";

enableProdMode();

const  routes:Routes = [
  {path: '', redirectTo: 'planets', pathMatch: 'full'},
  {path: 'planets', component: ListOfPlanetsComponent},
  {path: 'planets/:id', component: DetailOfPlanetComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ListOfPlanetsComponent,
    DetailOfPlanetComponent,
    HeaderOfPlanetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
