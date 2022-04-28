import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryCountryAgeComponent } from './order-reservation-list-query-country-age.component';

describe('OrderReservationListQueryCountryAgeComponent', () => {
  let component: OrderReservationListQueryCountryAgeComponent;
  let fixture: ComponentFixture<OrderReservationListQueryCountryAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryCountryAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryCountryAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
