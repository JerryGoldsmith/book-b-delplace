import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatAAComponent } from './seat-aa.component';

describe('SeatAAComponent', () => {
  let component: SeatAAComponent;
  let fixture: ComponentFixture<SeatAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
