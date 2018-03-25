import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOfPlanetsComponent } from './header-of-planets.component';

describe('HeaderOfPlanetsComponent', () => {
  let component: HeaderOfPlanetsComponent;
  let fixture: ComponentFixture<HeaderOfPlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOfPlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOfPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
