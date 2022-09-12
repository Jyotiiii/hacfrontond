import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListByReqidComponent } from './transaction-list-by-reqid.component';

describe('TransactionListByReqidComponent', () => {
  let component: TransactionListByReqidComponent;
  let fixture: ComponentFixture<TransactionListByReqidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionListByReqidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListByReqidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
