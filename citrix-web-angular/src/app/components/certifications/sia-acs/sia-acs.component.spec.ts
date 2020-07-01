import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiaAcsComponent } from './sia-acs.component';

describe('SiaAcsComponent', () => {
  let component: SiaAcsComponent;
  let fixture: ComponentFixture<SiaAcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiaAcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiaAcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
