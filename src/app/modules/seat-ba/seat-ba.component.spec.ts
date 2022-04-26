import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatBAComponent } from './seat-ba.component';

describe('SeatBAComponent', () => {
  let component: SeatBAComponent;
  let fixture: ComponentFixture<SeatBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
