import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateOrderPaymentComponent } from './calculate-order-payment.component';

describe('CalculateOrderPaymentComponent', () => {
  let component: CalculateOrderPaymentComponent;
  let fixture: ComponentFixture<CalculateOrderPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateOrderPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateOrderPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
