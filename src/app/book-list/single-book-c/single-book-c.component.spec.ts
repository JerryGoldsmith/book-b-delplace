import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookCComponent } from './single-book-c.component';

describe('SingleBookCComponent', () => {
  let component: SingleBookCComponent;
  let fixture: ComponentFixture<SingleBookCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
