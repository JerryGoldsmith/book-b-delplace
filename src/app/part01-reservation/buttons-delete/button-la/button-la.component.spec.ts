import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLAComponent } from './button-la.component';

describe('ButtonLAComponent', () => {
  let component: ButtonLAComponent;
  let fixture: ComponentFixture<ButtonLAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
