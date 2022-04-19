import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFBComponent } from './button-fb.component';

describe('ButtonFBComponent', () => {
  let component: ButtonFBComponent;
  let fixture: ComponentFixture<ButtonFBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
