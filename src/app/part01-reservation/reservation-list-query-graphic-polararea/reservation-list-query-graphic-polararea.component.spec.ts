import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListQueryGraphicPolarareaComponent } from './reservation-list-query-graphic-polararea.component';

describe('ReservationListQueryGraphicPolarareaComponent', () => {
  let component: ReservationListQueryGraphicPolarareaComponent;
  let fixture: ComponentFixture<ReservationListQueryGraphicPolarareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationListQueryGraphicPolarareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationListQueryGraphicPolarareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
