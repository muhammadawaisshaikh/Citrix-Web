import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetentHealthAndSafetyAdvisorComponent } from './competent-health-and-safety-advisor.component';

describe('CompetentHealthAndSafetyAdvisorComponent', () => {
  let component: CompetentHealthAndSafetyAdvisorComponent;
  let fixture: ComponentFixture<CompetentHealthAndSafetyAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetentHealthAndSafetyAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetentHealthAndSafetyAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
