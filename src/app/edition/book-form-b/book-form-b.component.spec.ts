import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormBComponent } from './book-form-b.component';

describe('BookFormBComponent', () => {
  let component: BookFormBComponent;
  let fixture: ComponentFixture<BookFormBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
