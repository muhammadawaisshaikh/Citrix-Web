import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsCharterComplaintsRoutingModule } from './clients-charter-complaints-routing.module';
import { ClientsCharterComplaintsComponent } from './clients-charter-complaints.component';

@NgModule({
  declarations: [ClientsCharterComplaintsComponent],
  imports: [
    CommonModule,
    ClientsCharterComplaintsRoutingModule
  ]
})
export class ClientsCharterComplaintsModule { }
