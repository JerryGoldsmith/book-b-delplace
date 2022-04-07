import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationHomeAdminComponent } from './order-reservation-home-admin.component';

describe('OrderReservationHomeAdminComponent', () => {
  let component: OrderReservationHomeAdminComponent;
  let fixture: ComponentFixture<OrderReservationHomeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReservationHomeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationHomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
