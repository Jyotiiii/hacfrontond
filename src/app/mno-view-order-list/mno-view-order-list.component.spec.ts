import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnoViewOrderListComponent } from './mno-view-order-list.component';

describe('MnoViewOrderListComponent', () => {
  let component: MnoViewOrderListComponent;
  let fixture: ComponentFixture<MnoViewOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnoViewOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnoViewOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
