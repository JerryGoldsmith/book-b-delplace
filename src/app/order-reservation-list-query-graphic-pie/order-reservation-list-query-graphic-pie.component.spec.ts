import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryGraphicPieComponent } from './order-reservation-list-query-graphic-pie.component';

describe('OrderReservationListQueryGraphicPieComponent', () => {
  let component: OrderReservationListQueryGraphicPieComponent;
  let fixture: ComponentFixture<OrderReservationListQueryGraphicPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryGraphicPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryGraphicPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
