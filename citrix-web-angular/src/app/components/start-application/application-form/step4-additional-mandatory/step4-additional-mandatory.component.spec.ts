import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4AdditionalMandatoryComponent } from './step4-additional-mandatory.component';

describe('Step4AdditionalMandatoryComponent', () => {
  let component: Step4AdditionalMandatoryComponent;
  let fixture: ComponentFixture<Step4AdditionalMandatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step4AdditionalMandatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4AdditionalMandatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
