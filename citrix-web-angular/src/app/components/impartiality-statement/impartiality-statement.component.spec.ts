import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpartialityStatementComponent } from './impartiality-statement.component';

describe('ImpartialityStatementComponent', () => {
  let component: ImpartialityStatementComponent;
  let fixture: ComponentFixture<ImpartialityStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpartialityStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpartialityStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
