import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step8AdditionalSite2Component } from './step8-additional-site2.component';

describe('Step8AdditionalSite2Component', () => {
  let component: Step8AdditionalSite2Component;
  let fixture: ComponentFixture<Step8AdditionalSite2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step8AdditionalSite2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step8AdditionalSite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
