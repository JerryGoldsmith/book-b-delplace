import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHomeReserveSeatsComponent } from './reservation-home-reserve-seats.component';

describe('ReservationHomeReserveSeatsComponent', () => {
  let component: ReservationHomeReserveSeatsComponent;
  let fixture: ComponentFixture<ReservationHomeReserveSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationHomeReserveSeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationHomeReserveSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
