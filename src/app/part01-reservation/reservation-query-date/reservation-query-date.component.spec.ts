import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationQueryDateComponent } from './reservation-query-date.component';

describe('ReservationQueryDateComponent', () => {
  let component: ReservationQueryDateComponent;
  let fixture: ComponentFixture<ReservationQueryDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationQueryDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationQueryDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
