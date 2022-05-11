import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCBComponent } from './button-cb.component';

describe('ButtonCBComponent', () => {
  let component: ButtonCBComponent;
  let fixture: ComponentFixture<ButtonCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
