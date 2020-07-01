import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireRiskAasessmentComponent } from './fire-risk-aasessment.component';

describe('FireRiskAasessmentComponent', () => {
  let component: FireRiskAasessmentComponent;
  let fixture: ComponentFixture<FireRiskAasessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireRiskAasessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireRiskAasessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
