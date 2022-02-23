import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookGComponent } from './single-book-g.component';

describe('SingleBookGComponent', () => {
  let component: SingleBookGComponent;
  let fixture: ComponentFixture<SingleBookGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
