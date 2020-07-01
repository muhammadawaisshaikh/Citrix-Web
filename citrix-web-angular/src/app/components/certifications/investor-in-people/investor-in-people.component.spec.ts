import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorInPeopleComponent } from './investor-in-people.component';

describe('InvestorInPeopleComponent', () => {
  let component: InvestorInPeopleComponent;
  let fixture: ComponentFixture<InvestorInPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorInPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorInPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
