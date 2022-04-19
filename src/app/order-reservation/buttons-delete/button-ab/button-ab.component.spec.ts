import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonABComponent } from './button-ab.component';

describe('ButtonABComponent', () => {
  let component: ButtonABComponent;
  let fixture: ComponentFixture<ButtonABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonABComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
