import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSeatsComponent } from './reservation-seats.component';

describe('ReservationComponent', () => {
  let component: ReservationSeatsComponent;
  let fixture: ComponentFixture<ReservationSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
