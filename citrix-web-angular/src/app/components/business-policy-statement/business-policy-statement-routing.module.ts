import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BusinessPolicyStatementComponent} from './business-policy-statement.component'

const routes: Routes = [
  {
    path: '',
    component: BusinessPolicyStatementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessPolicyStatementRoutingModule { }
