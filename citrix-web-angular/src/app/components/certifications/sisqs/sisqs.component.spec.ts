import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisqsComponent } from './sisqs.component';

describe('SisqsComponent', () => {
  let component: SisqsComponent;
  let fixture: ComponentFixture<SisqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
