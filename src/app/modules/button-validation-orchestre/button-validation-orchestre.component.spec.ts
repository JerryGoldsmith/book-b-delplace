import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonValidationOrchestreComponent } from './button-validation-orchestre.component';

describe('ButtonValidationOrchestreComponent', () => {
  let component: ButtonValidationOrchestreComponent;
  let fixture: ComponentFixture<ButtonValidationOrchestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonValidationOrchestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonValidationOrchestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
