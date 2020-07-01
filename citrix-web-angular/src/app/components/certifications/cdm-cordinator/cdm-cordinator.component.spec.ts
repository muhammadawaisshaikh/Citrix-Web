import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdmCordinatorComponent } from './cdm-cordinator.component';

describe('CdmCordinatorComponent', () => {
  let component: CdmCordinatorComponent;
  let fixture: ComponentFixture<CdmCordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdmCordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdmCordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
