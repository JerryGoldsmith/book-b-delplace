import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationHomeComponent } from './order-reservation-home.component';

describe('OrderReservationHomeComponent', () => {
  let component: OrderReservationHomeComponent;
  let fixture: ComponentFixture<OrderReservationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
