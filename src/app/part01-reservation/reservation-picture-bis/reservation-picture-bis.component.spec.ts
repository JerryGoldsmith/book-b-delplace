import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPictureBisComponent } from './reservation-picture-bis.component';

describe('ReservationPictureBisComponent', () => {
  let component: ReservationPictureBisComponent;
  let fixture: ComponentFixture<ReservationPictureBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationPictureBisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPictureBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
