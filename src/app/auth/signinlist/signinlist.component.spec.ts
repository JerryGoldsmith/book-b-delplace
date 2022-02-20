import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninlistComponent } from './signinlist.component';

describe('SigninlistComponent', () => {
  let component: SigninlistComponent;
  let fixture: ComponentFixture<SigninlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
