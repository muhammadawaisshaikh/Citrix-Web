import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeContractorComponent } from './safe-contractor.component';

describe('SafeContractorComponent', () => {
  let component: SafeContractorComponent;
  let fixture: ComponentFixture<SafeContractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeContractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
