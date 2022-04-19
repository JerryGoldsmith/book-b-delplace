import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDBComponent } from './button-db.component';

describe('ButtonDBComponent', () => {
  let component: ButtonDBComponent;
  let fixture: ComponentFixture<ButtonDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
