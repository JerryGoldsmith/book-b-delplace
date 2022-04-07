import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationPictureComponent } from './order-reservation-picture.component';

describe('OrderReservationPictureComponent', () => {
  let component: OrderReservationPictureComponent;
  let fixture: ComponentFixture<OrderReservationPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReservationPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
