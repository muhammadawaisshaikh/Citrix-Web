import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPolicyStatementComponent } from './business-policy-statement.component';

describe('BusinessPolicyStatementComponent', () => {
  let component: BusinessPolicyStatementComponent;
  let fixture: ComponentFixture<BusinessPolicyStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPolicyStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPolicyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
