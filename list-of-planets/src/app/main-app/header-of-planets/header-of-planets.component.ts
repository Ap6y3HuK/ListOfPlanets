import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-of-planets',
  templateUrl: './header-of-planets.component.html',
  styleUrls: ['./header-of-planets.component.css']
})
export class HeaderOfPlanetsComponent implements OnInit {
  @Input() allPlanetsName: string[];
  public sampleHeaders = ["Name", "Rotation period", "Orbital period", "Diameter", "Surface water"];

  constructor() { }

  ngOnInit() {}
}
