import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationHomeQueryComponent } from './order-reservation-home-query.component';

describe('OrderReservationHomeQueryComponent', () => {
  let component: OrderReservationHomeQueryComponent;
  let fixture: ComponentFixture<OrderReservationHomeQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReservationHomeQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationHomeQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
