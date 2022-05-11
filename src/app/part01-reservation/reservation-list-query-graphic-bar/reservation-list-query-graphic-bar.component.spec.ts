import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListQueryGraphicBarComponent } from './reservation-list-query-graphic-bar.component';

describe('ReservationListQueryGraphicBarComponent', () => {
  let component: ReservationListQueryGraphicBarComponent;
  let fixture: ComponentFixture<ReservationListQueryGraphicBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationListQueryGraphicBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationListQueryGraphicBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
