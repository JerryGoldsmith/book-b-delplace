import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationListQueryGraphicsComponent } from './reservation-list-query-graphics.component';

describe('ReservationListQueryGraphicsComponent', () => {
  let component: ReservationListQueryGraphicsComponent;
  let fixture: ComponentFixture<ReservationListQueryGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationListQueryGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationListQueryGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
