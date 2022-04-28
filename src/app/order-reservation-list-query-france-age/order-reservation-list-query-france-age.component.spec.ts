import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservationListQueryFranceAgeComponent } from './order-reservation-list-query-france-age.component';

describe('OrderReservationListQueryFranceAgeComponent', () => {
  let component: OrderReservationListQueryFranceAgeComponent;
  let fixture: ComponentFixture<OrderReservationListQueryFranceAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationListQueryFranceAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationListQueryFranceAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
