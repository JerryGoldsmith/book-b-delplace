import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationHomeHubComponent } from './reservation-home-hub.component';

describe('ReservationHomeHubComponent', () => {
  let component: ReservationHomeHubComponent;
  let fixture: ComponentFixture<ReservationHomeHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationHomeHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationHomeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
