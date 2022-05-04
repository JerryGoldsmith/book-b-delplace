import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryGraphicPolarareaComponent } from './order-reservation-list-query-graphic-polararea.component';

describe('OrderReservationListQueryGraphicPolarareaComponent', () => {
  let component: OrderReservationListQueryGraphicPolarareaComponent;
  let fixture: ComponentFixture<OrderReservationListQueryGraphicPolarareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryGraphicPolarareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryGraphicPolarareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
