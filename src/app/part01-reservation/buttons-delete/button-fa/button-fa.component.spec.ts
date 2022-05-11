import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFAComponent } from './button-fa.component';

describe('ButtonFAComponent', () => {
  let component: ButtonFAComponent;
  let fixture: ComponentFixture<ButtonFAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
