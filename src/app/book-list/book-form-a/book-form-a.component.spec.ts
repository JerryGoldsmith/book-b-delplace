import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormAComponent } from './book-form-a.component';

describe('BookFormAComponent', () => {
  let component: BookFormAComponent;
  let fixture: ComponentFixture<BookFormAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
