import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationShowButtonsComponent } from './order-reservation-show-buttons.component';

describe('OrderReservationShowButtonsComponent', () => {
  let component: OrderReservationShowButtonsComponent;
  let fixture: ComponentFixture<OrderReservationShowButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationShowButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationShowButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
