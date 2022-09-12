import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovallistComponent } from './approval-list.component';

describe('ApprovallistComponent', () => {
  let component: ApprovallistComponent;
  let fixture: ComponentFixture<ApprovallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovallistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
