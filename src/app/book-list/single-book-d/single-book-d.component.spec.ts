import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookDComponent } from './single-book-d.component';

describe('SingleBookDComponent', () => {
  let component: SingleBookDComponent;
  let fixture: ComponentFixture<SingleBookDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
