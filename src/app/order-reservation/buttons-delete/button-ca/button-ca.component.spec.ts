import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCAComponent } from './button-ca.component';

describe('ButtonCAComponent', () => {
  let component: ButtonCAComponent;
  let fixture: ComponentFixture<ButtonCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
