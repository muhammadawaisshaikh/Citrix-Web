import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCharterComplaintsComponent } from './clients-charter-complaints.component';

describe('ClientsCharterComplaintsComponent', () => {
  let component: ClientsCharterComplaintsComponent;
  let fixture: ComponentFixture<ClientsCharterComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsCharterComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsCharterComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
