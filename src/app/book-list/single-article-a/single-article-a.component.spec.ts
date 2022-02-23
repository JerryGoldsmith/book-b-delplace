import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleAComponent } from './single-article-a.component';

describe('SingleArticleAComponent', () => {
  let component: SingleArticleAComponent;
  let fixture: ComponentFixture<SingleArticleAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
