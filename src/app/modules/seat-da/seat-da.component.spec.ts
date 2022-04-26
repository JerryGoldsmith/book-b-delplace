import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatDAComponent } from './seat-da.component';

describe('SeatDAComponent', () => {
  let component: SeatDAComponent;
  let fixture: ComponentFixture<SeatDAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatDAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
