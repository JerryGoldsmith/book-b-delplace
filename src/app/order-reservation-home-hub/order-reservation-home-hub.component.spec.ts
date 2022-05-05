import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationHomeHubComponent } from './order-reservation-home-hub.component';

describe('OrderReservationHomeHubComponent', () => {
  let component: OrderReservationHomeHubComponent;
  let fixture: ComponentFixture<OrderReservationHomeHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReservationHomeHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationHomeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
