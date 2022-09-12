import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMasterDataComponent } from './update-master-data.component';

describe('UpdateMasterDataComponent', () => {
  let component: UpdateMasterDataComponent;
  let fixture: ComponentFixture<UpdateMasterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMasterDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
