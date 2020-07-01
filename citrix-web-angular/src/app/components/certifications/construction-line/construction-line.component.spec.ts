import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionLineComponent } from './construction-line.component';

describe('ConstructionLineComponent', () => {
  let component: ConstructionLineComponent;
  let fixture: ComponentFixture<ConstructionLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
