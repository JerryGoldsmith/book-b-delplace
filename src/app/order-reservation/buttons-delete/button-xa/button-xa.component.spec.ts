import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonXAComponent } from './button-xa.component';

describe('ButtonXAComponent', () => {
  let component: ButtonXAComponent;
  let fixture: ComponentFixture<ButtonXAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonXAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonXAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
