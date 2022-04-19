import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBBComponent } from './button-bb.component';

describe('ButtonBBComponent', () => {
  let component: ButtonBBComponent;
  let fixture: ComponentFixture<ButtonBBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
