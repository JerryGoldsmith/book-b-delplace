import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryGraphicBarComponent } from './order-reservation-list-query-graphic-bar.component';

describe('OrderReservationListQueryGraphicBarComponent', () => {
  let component: OrderReservationListQueryGraphicBarComponent;
  let fixture: ComponentFixture<OrderReservationListQueryGraphicBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryGraphicBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryGraphicBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
