import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonValidationComponent } from './button-validation.component';

describe('ButtonValidationComponent', () => {
  let component: ButtonValidationComponent;
  let fixture: ComponentFixture<ButtonValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
