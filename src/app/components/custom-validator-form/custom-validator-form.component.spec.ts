import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorFormComponent } from './custom-validator-form.component';

describe('CustomValidatorFormComponent', () => {
  let component: CustomValidatorFormComponent;
  let fixture: ComponentFixture<CustomValidatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomValidatorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
