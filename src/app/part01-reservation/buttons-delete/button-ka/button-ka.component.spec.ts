import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonKAComponent } from './button-ka.component';

describe('ButtonKAComponent', () => {
  let component: ButtonKAComponent;
  let fixture: ComponentFixture<ButtonKAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonKAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonKAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
