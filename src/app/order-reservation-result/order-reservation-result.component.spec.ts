import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationResultComponent } from './order-reservation-result.component';

describe('OrderReservationResultComponent', () => {
  let component: OrderReservationResultComponent;
  let fixture: ComponentFixture<OrderReservationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
