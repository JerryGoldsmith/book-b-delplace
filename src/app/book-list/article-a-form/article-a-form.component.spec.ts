import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAFormComponent } from './article-a-form.component';

describe('ArticleAFormComponent', () => {
  let component: ArticleAFormComponent;
  let fixture: ComponentFixture<ArticleAFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleAFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
