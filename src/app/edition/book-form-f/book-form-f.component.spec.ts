import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormFComponent } from './book-form-f.component';

describe('BookFormFComponent', () => {
  let component: BookFormFComponent;
  let fixture: ComponentFixture<BookFormFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
