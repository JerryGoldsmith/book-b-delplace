import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormJComponent } from './book-form-j.component';

describe('BookFormJComponent', () => {
  let component: BookFormJComponent;
  let fixture: ComponentFixture<BookFormJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
