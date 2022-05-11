import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGAComponent } from './button-ga.component';

describe('ButtonGAComponent', () => {
  let component: ButtonGAComponent;
  let fixture: ComponentFixture<ButtonGAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
