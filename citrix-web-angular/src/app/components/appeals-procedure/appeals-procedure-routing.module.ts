import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppealsProcedureComponent} from './appeals-procedure.component'

const routes: Routes = [
  {
    path: '',
    component: AppealsProcedureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppealsProcedureRoutingModule { }
