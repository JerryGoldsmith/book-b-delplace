import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationPictureBisComponent } from './order-reservation-picture-bis.component';

describe('OrderReservationPictureBisComponent', () => {
  let component: OrderReservationPictureBisComponent;
  let fixture: ComponentFixture<OrderReservationPictureBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReservationPictureBisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationPictureBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
