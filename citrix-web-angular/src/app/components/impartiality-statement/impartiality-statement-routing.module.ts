import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ImpartialityStatementComponent} from './impartiality-statement.component'

const routes: Routes = [
  {
    path: '',
    component: ImpartialityStatementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpartialityStatementRoutingModule { }
