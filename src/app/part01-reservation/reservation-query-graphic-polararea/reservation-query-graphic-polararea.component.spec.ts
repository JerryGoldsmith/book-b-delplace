import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationQueryGraphicPolarareaComponent } from './reservation-query-graphic-polararea.component';

describe('ReservationQueryGraphicPolarareaComponent', () => {
  let component: ReservationQueryGraphicPolarareaComponent;
  let fixture: ComponentFixture<ReservationQueryGraphicPolarareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationQueryGraphicPolarareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationQueryGraphicPolarareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
