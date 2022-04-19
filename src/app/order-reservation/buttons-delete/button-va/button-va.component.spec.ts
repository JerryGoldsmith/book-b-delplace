import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVAComponent } from './button-va.component';

describe('ButtonVAComponent', () => {
  let component: ButtonVAComponent;
  let fixture: ComponentFixture<ButtonVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonVAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
