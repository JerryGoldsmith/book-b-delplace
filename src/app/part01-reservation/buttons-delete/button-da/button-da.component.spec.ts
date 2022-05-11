import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDAComponent } from './button-da.component';

describe('ButtonDAComponent', () => {
  let component: ButtonDAComponent;
  let fixture: ComponentFixture<ButtonDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
