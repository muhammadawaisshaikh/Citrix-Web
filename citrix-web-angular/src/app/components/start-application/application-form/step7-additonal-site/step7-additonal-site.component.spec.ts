import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step7AdditonalSiteComponent } from './step7-additonal-site.component';

describe('Step7AdditonalSiteComponent', () => {
  let component: Step7AdditonalSiteComponent;
  let fixture: ComponentFixture<Step7AdditonalSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step7AdditonalSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step7AdditonalSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
