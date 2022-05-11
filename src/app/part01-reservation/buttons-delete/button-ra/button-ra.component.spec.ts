import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRAComponent } from './button-ra.component';

describe('ButtonRAComponent', () => {
  let component: ButtonRAComponent;
  let fixture: ComponentFixture<ButtonRAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
