import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormCComponent } from './book-form-c.component';

describe('BookFormCComponent', () => {
  let component: BookFormCComponent;
  let fixture: ComponentFixture<BookFormCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
