import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoFourtyFiveThousandOneComponent } from './iso-fourty-five-thousand-one.component';

describe('IsoFourtyFiveThousandOneComponent', () => {
  let component: IsoFourtyFiveThousandOneComponent;
  let fixture: ComponentFixture<IsoFourtyFiveThousandOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsoFourtyFiveThousandOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoFourtyFiveThousandOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
