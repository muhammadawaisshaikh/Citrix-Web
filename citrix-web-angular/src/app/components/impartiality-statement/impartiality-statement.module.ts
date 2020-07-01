import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpartialityStatementRoutingModule } from './impartiality-statement-routing.module';
import { ImpartialityStatementComponent } from './impartiality-statement.component';

@NgModule({
  declarations: [ImpartialityStatementComponent],
  imports: [
    CommonModule,
    ImpartialityStatementRoutingModule
  ]
})
export class ImpartialityStatementModule { }
