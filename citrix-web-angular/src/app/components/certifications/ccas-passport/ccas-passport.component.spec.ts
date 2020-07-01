import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcasPassportComponent } from './ccas-passport.component';

describe('CcasPassportComponent', () => {
  let component: CcasPassportComponent;
  let fixture: ComponentFixture<CcasPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcasPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcasPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
