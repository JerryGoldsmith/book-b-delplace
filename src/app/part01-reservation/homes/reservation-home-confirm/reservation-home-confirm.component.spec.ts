import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHomeConfirmComponent } from './reservation-home-confirm.component';

describe('OrderReservationHomeReserveSeatsComponent', () => {
  let component: ReservationHomeConfirmComponent;
  let fixture: ComponentFixture<ReservationHomeConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationHomeConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationHomeConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
