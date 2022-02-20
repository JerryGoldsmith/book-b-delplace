import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuplistComponent } from './signuplist.component';

describe('SignuplistComponent', () => {
  let component: SignuplistComponent;
  let fixture: ComponentFixture<SignuplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
