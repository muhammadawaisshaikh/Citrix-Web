import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step9AdditonalSite3Component } from './step9-additonal-site3.component';

describe('Step9AdditonalSite3Component', () => {
  let component: Step9AdditonalSite3Component;
  let fixture: ComponentFixture<Step9AdditonalSite3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step9AdditonalSite3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step9AdditonalSite3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
