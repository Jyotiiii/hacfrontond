import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandAccessComponent } from './grand-access.component';

describe('GrandAccessComponent', () => {
  let component: GrandAccessComponent;
  let fixture: ComponentFixture<GrandAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
