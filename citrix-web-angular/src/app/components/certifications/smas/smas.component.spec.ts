import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmasComponent } from './smas.component';

describe('SmasComponent', () => {
  let component: SmasComponent;
  let fixture: ComponentFixture<SmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
