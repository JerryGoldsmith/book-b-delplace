import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsOrchestreComponent } from './seats-orchestre.component';

describe('SeatsOrchestreComponent', () => {
  let component: SeatsOrchestreComponent;
  let fixture: ComponentFixture<SeatsOrchestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsOrchestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsOrchestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
