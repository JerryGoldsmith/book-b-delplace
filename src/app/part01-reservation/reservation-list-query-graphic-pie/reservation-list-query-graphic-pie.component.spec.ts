import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListQueryGraphicPieComponent } from './reservation-list-query-graphic-pie.component';

describe('ReservationListQueryGraphicPieComponent', () => {
  let component: ReservationListQueryGraphicPieComponent;
  let fixture: ComponentFixture<ReservationListQueryGraphicPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationListQueryGraphicPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationListQueryGraphicPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
