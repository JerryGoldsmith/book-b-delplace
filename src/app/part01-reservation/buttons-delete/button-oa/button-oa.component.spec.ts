import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOAComponent } from './button-oa.component';

describe('ButtonOAComponent', () => {
  let component: ButtonOAComponent;
  let fixture: ComponentFixture<ButtonOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonOAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
