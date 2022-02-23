import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookBComponent } from './single-book-b.component';

describe('SingleBookBComponent', () => {
  let component: SingleBookBComponent;
  let fixture: ComponentFixture<SingleBookBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
