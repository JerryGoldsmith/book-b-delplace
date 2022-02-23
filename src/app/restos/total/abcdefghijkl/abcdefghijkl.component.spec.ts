import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcdefghijklComponent } from './abcdefghijkl.component';

describe('AbcdefghijklComponent', () => {
  let component: AbcdefghijklComponent;
  let fixture: ComponentFixture<AbcdefghijklComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcdefghijklComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcdefghijklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
