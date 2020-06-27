import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2TypeApplicationComponent } from './step2-type-application.component';

describe('Step2TypeApplicationComponent', () => {
  let component: Step2TypeApplicationComponent;
  let fixture: ComponentFixture<Step2TypeApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2TypeApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2TypeApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
