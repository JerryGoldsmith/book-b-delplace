import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookKComponent } from './single-book-k.component';

describe('SingleBookKComponent', () => {
  let component: SingleBookKComponent;
  let fixture: ComponentFixture<SingleBookKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
