import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationAdminComponent } from './order-reservation-admin.component';

describe('OrderReservationAdminComponent', () => {
  let component: OrderReservationAdminComponent;
  let fixture: ComponentFixture<OrderReservationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReservationAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
