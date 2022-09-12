import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFunderComponent } from './register-funder.component';

describe('RegisterFunderComponent', () => {
  let component: RegisterFunderComponent;
  let fixture: ComponentFixture<RegisterFunderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFunderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
