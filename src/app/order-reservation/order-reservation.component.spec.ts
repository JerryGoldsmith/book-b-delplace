import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderReservationComponent } from './order-reservation.component';

import { By } from '@angular/platform-browser';

describe('OrderReservationComponent', () => {
  let component: OrderReservationComponent;
  let fixture: ComponentFixture<OrderReservationComponent>;

  const getSubmitButton = () => fixture.debugElement.query(By.css('submit-button'));
  const getButtonsPosition = () => fixture.debugElement.query(By.css('buttons-position'));
  const getChangeMindButton = () => fixture.debugElement.query(By.css('change-mind-button'));
  const getCloseButton = () => fixture.debugElement.query(By.css('close-button'));

  function createHostComponent(
    template: string
  ): ComponentFixture<OrderReservationComponent> {
    TestBed.overrideComponent(OrderReservationComponent, { set: { template: template } });
    fixture = TestBed.createComponent(OrderReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    return fixture;
  }

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    const template = '<app-order-reservation></app-order-reservation>';
    fixture = createHostComponent(template);
    expect(component).toBeTruthy();
  });

  it('should initially not be disabled and show label', () => {
    const template = '<app-order-reservation></app-order-reservation>';
    fixture = createHostComponent(template);
    expect(getSubmitButton().nativeElement.disabled).toBeFalsy();
    expect(getButtonsPosition()).toBeNull();
    expect(getChangeMindButton()).toBeNull();
    expect(getCloseButton()).toBeNull();
  });
});
