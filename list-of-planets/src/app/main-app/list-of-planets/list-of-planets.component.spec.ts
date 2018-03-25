import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPlanetsComponent } from './list-of-planets.component';

describe('ListOfPlanetsComponent', () => {
  let component: ListOfPlanetsComponent;
  let fixture: ComponentFixture<ListOfPlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
