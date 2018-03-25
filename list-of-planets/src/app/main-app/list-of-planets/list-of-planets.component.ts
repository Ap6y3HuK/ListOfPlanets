import { Component, OnInit } from '@angular/core';

import { Planet } from "../../planet";
import { PlanetService } from "../../services/planet-service.service";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-list-of-planets',
  templateUrl: './list-of-planets.component.html',
  styleUrls: ['./list-of-planets.component.css']
})
export class ListOfPlanetsComponent implements OnInit {
  planets$: Observable<Planet[]>;
  planets: Planet[] = [];
  private searchTerms = new Subject<String>();
  pageNumber: number = 1;
  amountOfElements: number = 10;
  labelsOfQuantity: number[] = [5, 10, 25, 100];

  constructor(private servicePlanet: PlanetService) { }

  ngOnInit() {
    this.getResponse();
    this.planets$ = this.searchTerms.pipe(
      distinctUntilChanged(),
      switchMap((term: string) => this.showListOfPlanets(term))
    );
  }

  showListOfPlanets(term: string){
    if (term) {
      let filteredRows;
      filteredRows = this.planets.filter(planet => planet.name.includes(term));
      return Observable.of(filteredRows);
    }
    return Observable.of(this.planets);
  }

  searchPlanet(name: string): void {
    this.searchTerms.next(name);
  }

  changeSizeOfPage(amount: number) {
    this.amountOfElements = amount;
  }

  getResponse()  {
    this.servicePlanet.getPlanets()
      .subscribe(response => {
        this.getPlanets(response[0].results);
        this.getPlanets(response[1].results);
        this.getPlanets(response[2].results);
        this.getPlanets(response[3].results);
        this.getPlanets(response[4].results);
        this.getPlanets(response[5].results);
        this.getPlanets(response[6].results);
        this.searchPlanet('');
      });
  }

  getPlanets(obj: any)  {
    let planet: Planet;
    for (let i = 0; i < obj.length; i++){
      planet = obj[i];
      this.planets.push(planet);
    }
  }
}
