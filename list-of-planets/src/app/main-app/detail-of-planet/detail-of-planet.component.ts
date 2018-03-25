import { Component, Input, OnInit } from '@angular/core';

import { Planet } from "../../planet";
import { PlanetService } from "../../services/planet-service.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-of-planet',
  templateUrl: './detail-of-planet.component.html',
  styleUrls: ['./detail-of-planet.component.css']
})
export class DetailOfPlanetComponent implements OnInit {
  @Input() planet: Planet;
  constructor(
    private servicePlanet: PlanetService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.servicePlanet.getPlanet(id)
      .subscribe(planet => this.planet = planet);
  }

  goBack(): void {
    this.location.back();
  }
}
