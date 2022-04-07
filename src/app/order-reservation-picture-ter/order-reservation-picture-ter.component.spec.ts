import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationPictureTerComponent } from './order-reservation-picture-ter.component';

describe('OrderReservationPictureTerComponent', () => {
  let component: OrderReservationPictureTerComponent;
  let fixture: ComponentFixture<OrderReservationPictureTerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReservationPictureTerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationPictureTerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
