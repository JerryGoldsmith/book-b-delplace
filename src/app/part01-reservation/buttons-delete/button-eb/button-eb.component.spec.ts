import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEBComponent } from './button-eb.component';

describe('ButtonEBComponent', () => {
  let component: ButtonEBComponent;
  let fixture: ComponentFixture<ButtonEBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
