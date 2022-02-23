import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormKComponent } from './book-form-k.component';

describe('BookFormKComponent', () => {
  let component: BookFormKComponent;
  let fixture: ComponentFixture<BookFormKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
