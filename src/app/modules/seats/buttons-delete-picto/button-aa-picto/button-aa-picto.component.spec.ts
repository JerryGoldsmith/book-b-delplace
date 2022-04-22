import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAAPictoComponent } from './button-aa-picto.component';

describe('ButtonDeleteComponent', () => {
  let component: ButtonAAPictoComponent;
  let fixture: ComponentFixture<ButtonAAPictoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAAPictoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAAPictoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
