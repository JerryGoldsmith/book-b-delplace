import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationConfirmationComponent } from './order-reservation-confirmation.component';

describe('OrderReservationConfirmationComponent', () => {
  let component: OrderReservationConfirmationComponent;
  let fixture: ComponentFixture<OrderReservationConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
