import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLightComponent } from './signup-light.component';

describe('SignupLightComponent', () => {
  let component: SignupLightComponent;
  let fixture: ComponentFixture<SignupLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
