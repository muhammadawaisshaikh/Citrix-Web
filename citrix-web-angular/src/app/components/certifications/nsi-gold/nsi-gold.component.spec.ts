import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsiGoldComponent } from './nsi-gold.component';

describe('NsiGoldComponent', () => {
  let component: NsiGoldComponent;
  let fixture: ComponentFixture<NsiGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsiGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsiGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
