import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormEComponent } from './book-form-e.component';

describe('BookFormEComponent', () => {
  let component: BookFormEComponent;
  let fixture: ComponentFixture<BookFormEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
