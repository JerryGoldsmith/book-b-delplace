import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHomeAdminComponent } from './reservation-home-admin.component';

describe('ReservationHomeAdminComponent', () => {
  let component: ReservationHomeAdminComponent;
  let fixture: ComponentFixture<ReservationHomeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationHomeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationHomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
