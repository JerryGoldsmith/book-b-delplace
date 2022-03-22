import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormIComponent } from './book-form-i.component';

describe('BookFormIComponent', () => {
  let component: BookFormIComponent;
  let fixture: ComponentFixture<BookFormIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
