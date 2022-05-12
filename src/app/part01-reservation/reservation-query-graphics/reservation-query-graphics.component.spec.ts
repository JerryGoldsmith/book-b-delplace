import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationQueryGraphicsComponent } from './reservation-query-graphics.component';

describe('ReservationQueryGraphicsComponent', () => {
  let component: ReservationQueryGraphicsComponent;
  let fixture: ComponentFixture<ReservationQueryGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationQueryGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationQueryGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
