import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonJAComponent } from './button-ja.component';

describe('ButtonJAComponent', () => {
  let component: ButtonJAComponent;
  let fixture: ComponentFixture<ButtonJAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonJAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonJAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
