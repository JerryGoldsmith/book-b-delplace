import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatCAComponent } from './seat-ca.component';

describe('SeatCAComponent', () => {
  let component: SeatCAComponent;
  let fixture: ComponentFixture<SeatCAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatCAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
