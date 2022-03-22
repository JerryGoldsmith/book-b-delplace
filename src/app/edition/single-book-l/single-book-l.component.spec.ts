import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookLComponent } from './single-book-l.component';

describe('SingleBookLComponent', () => {
  let component: SingleBookLComponent;
  let fixture: ComponentFixture<SingleBookLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
