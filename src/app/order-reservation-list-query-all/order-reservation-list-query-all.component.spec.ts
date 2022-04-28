import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryAllComponent } from './order-reservation-list-query-all.component';

describe('OrderReservationListQueryAllComponent', () => {
  let component: OrderReservationListQueryAllComponent;
  let fixture: ComponentFixture<OrderReservationListQueryAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
