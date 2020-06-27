import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartApplicationRoutingModule } from './start-application-routing.module';
import { MainComponent } from './main/main.component';
import { StartApplicationComponent } from './start-application.component';

@NgModule({
  declarations: [MainComponent, StartApplicationComponent],
  imports: [
    CommonModule,
    StartApplicationRoutingModule
  ]
})
export class StartApplicationModule { }
