import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPictureTerComponent } from './reservation-picture-ter.component';

describe('ReservationPictureTerComponent', () => {
  let component: ReservationPictureTerComponent;
  let fixture: ComponentFixture<ReservationPictureTerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationPictureTerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPictureTerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
