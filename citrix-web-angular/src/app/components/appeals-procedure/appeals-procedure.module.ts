import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppealsProcedureRoutingModule } from './appeals-procedure-routing.module';
import { AppealsProcedureComponent } from './appeals-procedure.component';

@NgModule({
  declarations: [AppealsProcedureComponent],
  imports: [
    CommonModule,
    AppealsProcedureRoutingModule
  ]
})
export class AppealsProcedureModule { }
