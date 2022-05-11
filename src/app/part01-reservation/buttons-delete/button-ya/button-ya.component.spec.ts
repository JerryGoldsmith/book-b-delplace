import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonYAComponent } from './button-ya.component';

describe('ButtonYAComponent', () => {
  let component: ButtonYAComponent;
  let fixture: ComponentFixture<ButtonYAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonYAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonYAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
