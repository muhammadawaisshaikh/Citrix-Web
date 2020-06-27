import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5CompanyDetailsComponent } from './step5-company-details.component';

describe('Step5CompanyDetailsComponent', () => {
  let component: Step5CompanyDetailsComponent;
  let fixture: ComponentFixture<Step5CompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step5CompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step5CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
