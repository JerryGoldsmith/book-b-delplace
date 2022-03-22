import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookFComponent } from './single-book-f.component';

describe('SingleBookFComponent', () => {
  let component: SingleBookFComponent;
  let fixture: ComponentFixture<SingleBookFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
