import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIAComponent } from './button-ia.component';

describe('ButtonIAComponent', () => {
  let component: ButtonIAComponent;
  let fixture: ComponentFixture<ButtonIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
