import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryDateComponent } from './order-reservation-list-query-date.component';

describe('OrderReservationListQueryDateComponent', () => {
  let component: OrderReservationListQueryDateComponent;
  let fixture: ComponentFixture<OrderReservationListQueryDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
