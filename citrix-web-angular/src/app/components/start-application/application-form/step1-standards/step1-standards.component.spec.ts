import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1StandardsComponent } from './step1-standards.component';

describe('Step1StandardsComponent', () => {
  let component: Step1StandardsComponent;
  let fixture: ComponentFixture<Step1StandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1StandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1StandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
