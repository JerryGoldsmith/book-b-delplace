import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFsComponent } from './signup-fs.component';

describe('SignupFsComponent', () => {
  let component: SignupFsComponent;
  let fixture: ComponentFixture<SignupFsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
