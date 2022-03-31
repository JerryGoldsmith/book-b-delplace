import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationShowResultComponent } from './order-reservation-show-result.component';

describe('OrderReservationShowResultComponent', () => {
  let component: OrderReservationShowResultComponent;
  let fixture: ComponentFixture<OrderReservationShowResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationShowResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationShowResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
