import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { ApiResponse } from "../interfaces/api-response";
import { Planet } from "../planet";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
@Injectable()
export class PlanetService {

  constructor(private httpC: HttpClient) { }

  getPlanets(): Observable<ApiResponse[]> {
    let url1 = this.httpC.get<ApiResponse>('https://swapi.co/api/planets/?page=1', httpOptions);
    let url2 = this.httpC.get<ApiResponse>('https://swapi.co/api/planets/?page=2', httpOptions);
    let url3 = this.httpC.get<ApiResponse>('https://swapi.co/api/planets/?page=3', httpOptions);
    let url4 = this.httpC.get<ApiResponse>('https://swapi.co/api/planets/?page=4', httpOptions);
    let url5 = this.httpC.get<ApiResponse>('https://swapi.co/api/planets/?page=5', httpOptions);
    let url6 = this.httpC.get<ApiResponse>('https://swapi.co/api/planets/?page=6', httpOptions);
    let url7 = this.httpC.get<ApiResponse>('https://swapi.co/api/planets/?page=7', httpOptions);
    return Observable.forkJoin<ApiResponse[]>([url1, url2, url3, url4, url5, url6, url7]);
  }

  getPlanet(id: number): Observable<Planet> {
    return this.httpC.get<Planet>(`https://swapi.co/api/planets/${id}/`, httpOptions);
  }
}


