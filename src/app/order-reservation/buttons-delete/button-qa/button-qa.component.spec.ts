import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonQAComponent } from './button-qa.component';

describe('ButtonQAComponent', () => {
  let component: ButtonQAComponent;
  let fixture: ComponentFixture<ButtonQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonQAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
