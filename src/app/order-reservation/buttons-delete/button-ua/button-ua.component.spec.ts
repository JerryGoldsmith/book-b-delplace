import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUAComponent } from './button-ua.component';

describe('ButtonUAComponent', () => {
  let component: ButtonUAComponent;
  let fixture: ComponentFixture<ButtonUAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonUAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
