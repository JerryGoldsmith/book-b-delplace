import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatEAComponent } from './seat-ea.component';

describe('SeatEAComponent', () => {
  let component: SeatEAComponent;
  let fixture: ComponentFixture<SeatEAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatEAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
