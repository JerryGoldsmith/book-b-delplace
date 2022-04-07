import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListSeatsComponent } from './order-reservation-list-seats.component';

describe('OrderReservationListComponent', () => {
  let component: OrderReservationListSeatsComponent;
  let fixture: ComponentFixture<OrderReservationListSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
