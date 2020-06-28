import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SectorComponent} from './sector.component'

const routes: Routes = [
  {
    path: '',
    component: SectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorRoutingModule { }
