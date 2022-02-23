import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListComponent } from './order-reservation-list.component';

describe('OrderReservationListComponent', () => {
  let component: OrderReservationListComponent;
  let fixture: ComponentFixture<OrderReservationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
