import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllOrderComponent } from './find-all-order.component';

describe('FindAllOrderComponent', () => {
  let component: FindAllOrderComponent;
  let fixture: ComponentFixture<FindAllOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
