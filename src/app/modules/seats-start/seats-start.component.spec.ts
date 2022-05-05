import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsStartComponent } from './seats-start.component';

describe('SeatsStartComponent', () => {
  let component: SeatsStartComponent;
  let fixture: ComponentFixture<SeatsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
