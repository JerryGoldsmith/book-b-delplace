import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHAComponent } from './button-ha.component';

describe('ButtonHAComponent', () => {
  let component: ButtonHAComponent;
  let fixture: ComponentFixture<ButtonHAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonHAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
