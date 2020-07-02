import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StartApplicationRoutingModule } from './start-application-routing.module';
import { MainComponent } from './main/main.component';
import { StartApplicationComponent } from './start-application.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { Step1StandardsComponent } from './application-form/step1-standards/step1-standards.component';
import { Step2TypeApplicationComponent } from './application-form/step2-type-application/step2-type-application.component';
import { Step3PersonalDetailsComponent } from './application-form/step3-personal-details/step3-personal-details.component';

@NgModule({
  declarations: [MainComponent, StartApplicationComponent, ApplicationFormComponent, Step1StandardsComponent, Step2TypeApplicationComponent, Step3PersonalDetailsComponent],
  imports: [
    CommonModule,
    StartApplicationRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class StartApplicationModule { }
