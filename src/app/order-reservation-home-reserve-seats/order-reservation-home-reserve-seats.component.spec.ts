import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationHomeReserveSeatsComponent } from './order-reservation-home-reserve-seats.component';

describe('OrderReservationHomeReserveSeatsComponent', () => {
  let component: OrderReservationHomeReserveSeatsComponent;
  let fixture: ComponentFixture<OrderReservationHomeReserveSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReservationHomeReserveSeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationHomeReserveSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
