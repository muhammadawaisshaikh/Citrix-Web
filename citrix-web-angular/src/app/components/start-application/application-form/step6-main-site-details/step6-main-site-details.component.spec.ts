import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step6MainSiteDetailsComponent } from './step6-main-site-details.component';

describe('Step6MainSiteDetailsComponent', () => {
  let component: Step6MainSiteDetailsComponent;
  let fixture: ComponentFixture<Step6MainSiteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step6MainSiteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step6MainSiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
