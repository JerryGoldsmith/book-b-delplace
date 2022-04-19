import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTAComponent } from './button-ta.component';

describe('ButtonTAComponent', () => {
  let component: ButtonTAComponent;
  let fixture: ComponentFixture<ButtonTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
