import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWAComponent } from './button-wa.component';

describe('ButtonWAComponent', () => {
  let component: ButtonWAComponent;
  let fixture: ComponentFixture<ButtonWAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
