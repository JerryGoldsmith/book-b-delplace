import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMAComponent } from './button-ma.component';

describe('ButtonMAComponent', () => {
  let component: ButtonMAComponent;
  let fixture: ComponentFixture<ButtonMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonMAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
