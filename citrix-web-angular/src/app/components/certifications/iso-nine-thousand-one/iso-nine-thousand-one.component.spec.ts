import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoNineThousandOneComponent } from './iso-nine-thousand-one.component';

describe('IsoNineThousandOneComponent', () => {
  let component: IsoNineThousandOneComponent;
  let fixture: ComponentFixture<IsoNineThousandOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsoNineThousandOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoNineThousandOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
