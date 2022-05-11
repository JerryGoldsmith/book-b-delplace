import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEAComponent } from './button-ea.component';

describe('ButtonEAComponent', () => {
  let component: ButtonEAComponent;
  let fixture: ComponentFixture<ButtonEAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
