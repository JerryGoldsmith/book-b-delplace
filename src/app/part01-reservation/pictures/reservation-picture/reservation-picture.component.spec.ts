import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPictureComponent } from './reservation-picture.component';

describe('ReservationPictureComponent', () => {
  let component: ReservationPictureComponent;
  let fixture: ComponentFixture<ReservationPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
