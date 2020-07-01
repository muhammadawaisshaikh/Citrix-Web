import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientsCharterComplaintsComponent} from './clients-charter-complaints.component'

const routes: Routes = [
  {
    path: '',
    component: ClientsCharterComplaintsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsCharterComplaintsRoutingModule { }
