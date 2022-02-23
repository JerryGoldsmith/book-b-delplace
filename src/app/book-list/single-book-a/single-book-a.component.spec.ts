import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookAComponent } from './single-book-a.component';

describe('SingleBookAComponent', () => {
  let component: SingleBookAComponent;
  let fixture: ComponentFixture<SingleBookAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
