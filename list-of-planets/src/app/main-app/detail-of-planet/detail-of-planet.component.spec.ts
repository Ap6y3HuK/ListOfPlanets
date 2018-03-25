import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfPlanetComponent } from './detail-of-planet.component';

describe('DetailOfPlanetComponent', () => {
  let component: DetailOfPlanetComponent;
  let fixture: ComponentFixture<DetailOfPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOfPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOfPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
