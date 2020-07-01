import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersProfileComponent } from './builders-profile.component';

describe('BuildersProfileComponent', () => {
  let component: BuildersProfileComponent;
  let fixture: ComponentFixture<BuildersProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildersProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
