import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormHComponent } from './book-form-h.component';

describe('BookFormHComponent', () => {
  let component: BookFormHComponent;
  let fixture: ComponentFixture<BookFormHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
