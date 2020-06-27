import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartApplicationRoutingModule } from './start-application-routing.module';
import { MainComponent } from './main/main.component';
import { StartApplicationComponent } from './start-application.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { Step1StandardsComponent } from './application-form/step1-standards/step1-standards.component';
import { Step2TypeApplicationComponent } from './application-form/step2-type-application/step2-type-application.component';
import { Step3PersonalDetailsComponent } from './application-form/step3-personal-details/step3-personal-details.component';
import { Step4AdditionalMandatoryComponent } from './application-form/step4-additional-mandatory/step4-additional-mandatory.component';
import { Step5CompanyDetailsComponent } from './application-form/step5-company-details/step5-company-details.component';
import { Step6MainSiteDetailsComponent } from './application-form/step6-main-site-details/step6-main-site-details.component';
import { Step7AdditonalSiteComponent } from './application-form/step7-additonal-site/step7-additonal-site.component';

@NgModule({
  declarations: [MainComponent, StartApplicationComponent, ApplicationFormComponent, Step1StandardsComponent, Step2TypeApplicationComponent, Step3PersonalDetailsComponent, Step4AdditionalMandatoryComponent, Step5CompanyDetailsComponent, Step6MainSiteDetailsComponent, Step7AdditonalSiteComponent],
  imports: [
    CommonModule,
    StartApplicationRoutingModule
  ]
})
export class StartApplicationModule { }
