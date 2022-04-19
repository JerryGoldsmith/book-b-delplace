import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSAComponent } from './button-sa.component';

describe('ButtonSAComponent', () => {
  let component: ButtonSAComponent;
  let fixture: ComponentFixture<ButtonSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
