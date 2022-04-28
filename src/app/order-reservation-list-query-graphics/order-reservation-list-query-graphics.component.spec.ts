import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryGraphicsComponent } from './order-reservation-list-query-graphics.component';

describe('OrderReservationListQueryGraphicsComponent', () => {
  let component: OrderReservationListQueryGraphicsComponent;
  let fixture: ComponentFixture<OrderReservationListQueryGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
