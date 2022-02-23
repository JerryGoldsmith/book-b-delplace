import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormLComponent } from './book-form-l.component';

describe('BookFormLComponent', () => {
  let component: BookFormLComponent;
  let fixture: ComponentFixture<BookFormLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
