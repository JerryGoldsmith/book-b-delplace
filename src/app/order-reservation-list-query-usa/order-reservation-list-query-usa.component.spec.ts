import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryUsaComponent } from './order-reservation-list-query-usa.component';

describe('OrderReservationListQueryUsaComponent', () => {
  let component: OrderReservationListQueryUsaComponent;
  let fixture: ComponentFixture<OrderReservationListQueryUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
