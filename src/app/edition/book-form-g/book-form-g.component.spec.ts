import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormGComponent } from './book-form-g.component';

describe('BookFormGComponent', () => {
  let component: BookFormGComponent;
  let fixture: ComponentFixture<BookFormGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
