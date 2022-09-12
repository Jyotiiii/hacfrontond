import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListBytransidComponent } from './transaction-list-bytransid.component';

describe('TransactionListBytransidComponent', () => {
  let component: TransactionListBytransidComponent;
  let fixture: ComponentFixture<TransactionListBytransidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionListBytransidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListBytransidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
