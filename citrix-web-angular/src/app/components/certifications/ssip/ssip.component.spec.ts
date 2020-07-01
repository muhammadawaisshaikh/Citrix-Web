import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsipComponent } from './ssip.component';

describe('SsipComponent', () => {
  let component: SsipComponent;
  let fixture: ComponentFixture<SsipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
