import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatFAComponent } from './seat-fa.component';

describe('SeatFAComponent', () => {
  let component: SeatFAComponent;
  let fixture: ComponentFixture<SeatFAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatFAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
