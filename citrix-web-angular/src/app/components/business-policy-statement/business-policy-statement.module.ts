import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessPolicyStatementRoutingModule } from './business-policy-statement-routing.module';
import { BusinessPolicyStatementComponent } from './business-policy-statement.component';

@NgModule({
  declarations: [BusinessPolicyStatementComponent],
  imports: [
    CommonModule,
    BusinessPolicyStatementRoutingModule
  ]
})
export class BusinessPolicyStatementModule { }
