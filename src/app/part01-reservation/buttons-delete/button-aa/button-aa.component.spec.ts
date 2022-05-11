import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAAComponent } from './button-aa.component';

describe('ButtonAAComponent', () => {
  let component: ButtonAAComponent;
  let fixture: ComponentFixture<ButtonAAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
