import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoFourteenThousandOneComponent } from './iso-fourteen-thousand-one.component';

describe('IsoFourteenThousandOneComponent', () => {
  let component: IsoFourteenThousandOneComponent;
  let fixture: ComponentFixture<IsoFourteenThousandOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsoFourteenThousandOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoFourteenThousandOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
