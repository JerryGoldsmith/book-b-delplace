import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationSeatsComponent } from './order-reservation-seats.component';

describe('OrderReservationComponent', () => {
  let component: OrderReservationSeatsComponent;
  let fixture: ComponentFixture<OrderReservationSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
