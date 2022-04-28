import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryUsaTomAgeComponent } from './order-reservation-list-query-usa-tom-age.component';

describe('OrderReservationListQueryUsaTomAgeComponent', () => {
  let component: OrderReservationListQueryUsaTomAgeComponent;
  let fixture: ComponentFixture<OrderReservationListQueryUsaTomAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryUsaTomAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryUsaTomAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
