import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNAComponent } from './button-na.component';

describe('ButtonNAComponent', () => {
  let component: ButtonNAComponent;
  let fixture: ComponentFixture<ButtonNAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonNAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
