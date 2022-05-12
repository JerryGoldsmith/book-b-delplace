import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationQueryGraphicBarComponent } from './reservation-query-graphic-bar.component';

describe('ReservationQueryGraphicBarComponent', () => {
  let component: ReservationQueryGraphicBarComponent;
  let fixture: ComponentFixture<ReservationQueryGraphicBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationQueryGraphicBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationQueryGraphicBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
