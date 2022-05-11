import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderReservationComponent } from './order-reservation.component';

import { By } from '@angular/platform-browser';

describe('OrderReservationComponent', () => {
  let component: OrderReservationComponent;
  let fixture: ComponentFixture<OrderReservationComponent>;

  const getSubmitButton = () => fixture.debugElement.query(By.css('submit-button'));
  const getChangeMindButton = () => fixture.debugElement.query(By.css('change-mind-button'));
  const getCloseButton = () => fixture.debugElement.query(By.css('close-button'));
  const getSelect = () =>
    fixture.debugElement.query(By.css('.select'));

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
    expect(getChangeMindButton().nativeElement.disabled).toBeFalsy();
    expect(getCloseButton().nativeElement.disabled).toBeFalsy();
    expect(getSelect()).toBeNull();
  });

  // it('should disable button if disabled property is set', () => {
  //   const template =
  //     '<app-order-reservation [disabled]="true"></app-order-reservation>';
  //   fixture = createHostComponent(template);
  //   expect(getSubmitButton().nativeElement.disabled).toBeTruthy();
  //   expect(getChangeMindButton().nativeElement.disabled).toBeTruthy();
  //   expect(getCloseButton().nativeElement.disabled).toBeTruthy();
  // });

  it('should display label with provided text when label property is set', () => {
    const template =
      '<app-order-reservation label="delete"></app-order-reservation>';
    fixture = createHostComponent(template);
    expect(getSelect()).toBeTruthy();
    expect(getSelect().nativeElement.textContent).toBe('delete');
  });

  it('should emit action event on button click', () => {
    const template =
      '<app-order-reservation (action)="actionHandler()"></app-order-reservation>';
    fixture = createHostComponent(template);
    getSubmitButton().triggerEventHandler('click', {});
    getChangeMindButton().triggerEventHandler('click', {});
    getCloseButton().triggerEventHandler('click', {});
  });
});
