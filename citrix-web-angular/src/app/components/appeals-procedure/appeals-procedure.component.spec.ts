import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealsProcedureComponent } from './appeals-procedure.component';

describe('AppealsProcedureComponent', () => {
  let component: AppealsProcedureComponent;
  let fixture: ComponentFixture<AppealsProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppealsProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppealsProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
