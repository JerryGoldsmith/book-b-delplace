import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AReservationComponent } from './a-reservation.component';

describe('AReservationComponent', () => {
  let component: AReservationComponent;
  let fixture: ComponentFixture<AReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
