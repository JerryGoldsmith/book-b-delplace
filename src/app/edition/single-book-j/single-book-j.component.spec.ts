import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookJComponent } from './single-book-j.component';

describe('SingleBookJComponent', () => {
  let component: SingleBookJComponent;
  let fixture: ComponentFixture<SingleBookJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
