import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListConfirmComponent } from './order-reservation-list-confirm.component';

describe('OrderReservationListConfirmComponent', () => {
  let component: OrderReservationListConfirmComponent;
  let fixture: ComponentFixture<OrderReservationListConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
