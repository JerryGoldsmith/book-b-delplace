import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormDComponent } from './book-form-d.component';

describe('BookFormDComponent', () => {
  let component: BookFormDComponent;
  let fixture: ComponentFixture<BookFormDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
