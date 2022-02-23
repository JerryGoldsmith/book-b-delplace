import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookIComponent } from './single-book-i.component';

describe('SingleBookIComponent', () => {
  let component: SingleBookIComponent;
  let fixture: ComponentFixture<SingleBookIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
