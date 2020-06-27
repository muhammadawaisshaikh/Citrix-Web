import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartApplicationRoutingModule } from './start-application-routing.module';
import { MainComponent } from './main/main.component';
import { StartApplicationComponent } from './start-application.component';
import { ApplicationFormComponent } from './application-form/application-form.component';

@NgModule({
  declarations: [MainComponent, StartApplicationComponent, ApplicationFormComponent],
  imports: [
    CommonModule,
    StartApplicationRoutingModule
  ]
})
export class StartApplicationModule { }
