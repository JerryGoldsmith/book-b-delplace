import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPAComponent } from './button-pa.component';

describe('ButtonPAComponent', () => {
  let component: ButtonPAComponent;
  let fixture: ComponentFixture<ButtonPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
