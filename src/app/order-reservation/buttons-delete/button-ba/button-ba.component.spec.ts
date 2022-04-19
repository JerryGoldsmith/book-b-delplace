import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBAComponent } from './button-ba.component';

describe('ButtonBAComponent', () => {
  let component: ButtonBAComponent;
  let fixture: ComponentFixture<ButtonBAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
