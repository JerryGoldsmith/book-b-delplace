import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookEComponent } from './single-book-e.component';

describe('SingleBookEComponent', () => {
  let component: SingleBookEComponent;
  let fixture: ComponentFixture<SingleBookEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
