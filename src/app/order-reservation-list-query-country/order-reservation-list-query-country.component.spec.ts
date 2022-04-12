import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryCountryComponent } from './order-reservation-list-query-country.component';

describe('OrderReservationListQueryCountryComponent', () => {
  let component: OrderReservationListQueryCountryComponent;
  let fixture: ComponentFixture<OrderReservationListQueryCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
