import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part01SingleComponent } from './part01-single.component';

describe('Part01SingleComponent', () => {
  let component: Part01SingleComponent;
  let fixture: ComponentFixture<Part01SingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part01SingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part01SingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
