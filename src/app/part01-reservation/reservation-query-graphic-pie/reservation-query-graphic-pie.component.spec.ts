import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationQueryGraphicPieComponent } from './reservation-query-graphic-pie.component';

describe('ReservationQueryGraphicPieComponent', () => {
  let component: ReservationQueryGraphicPieComponent;
  let fixture: ComponentFixture<ReservationQueryGraphicPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationQueryGraphicPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationQueryGraphicPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
