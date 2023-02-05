import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobPopupComponent } from './add-job-popup.component';

describe('AddJobPopupComponent', () => {
  let component: AddJobPopupComponent;
  let fixture: ComponentFixture<AddJobPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
