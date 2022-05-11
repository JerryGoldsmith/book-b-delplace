import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListQueryDateComponent } from './reservation-list-query-date.component';

describe('ReservationListQueryDateComponent', () => {
  let component: ReservationListQueryDateComponent;
  let fixture: ComponentFixture<ReservationListQueryDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationListQueryDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationListQueryDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
