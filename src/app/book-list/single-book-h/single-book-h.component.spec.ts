import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookHComponent } from './single-book-h.component';

describe('SingleBookHComponent', () => {
  let component: SingleBookHComponent;
  let fixture: ComponentFixture<SingleBookHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
