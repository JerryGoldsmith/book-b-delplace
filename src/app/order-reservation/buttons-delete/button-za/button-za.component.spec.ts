import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonZAComponent } from './button-za.component';

describe('ButtonZAComponent', () => {
  let component: ButtonZAComponent;
  let fixture: ComponentFixture<ButtonZAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonZAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonZAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
