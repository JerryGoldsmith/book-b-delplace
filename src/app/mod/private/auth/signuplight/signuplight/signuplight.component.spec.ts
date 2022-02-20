import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuplightComponent } from './signuplight.component';

describe('SignuplightComponent', () => {
  let component: SignuplightComponent;
  let fixture: ComponentFixture<SignuplightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuplightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuplightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
