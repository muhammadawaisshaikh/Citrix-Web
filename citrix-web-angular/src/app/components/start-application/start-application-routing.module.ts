import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { Step1StandardsComponent } from './application-form/step1-standards/step1-standards.component';
import { Step2TypeApplicationComponent } from './application-form/step2-type-application/step2-type-application.component';
import { Step3PersonalDetailsComponent } from './application-form/step3-personal-details/step3-personal-details.component';
import { Step4AdditionalMandatoryComponent } from './application-form/step4-additional-mandatory/step4-additional-mandatory.component';
import { Step5CompanyDetailsComponent } from './application-form/step5-company-details/step5-company-details.component';
import { Step6MainSiteDetailsComponent } from './application-form/step6-main-site-details/step6-main-site-details.component';
import { Step7AdditonalSiteComponent } from './application-form/step7-additonal-site/step7-additonal-site.component';
import { Step8AdditionalSite2Component } from './application-form/step8-additional-site2/step8-additional-site2.component';
import { Step9AdditonalSite3Component } from './application-form/step9-additonal-site3/step9-additonal-site3.component';
import { SubContractorsComponent } from './application-form/sub-contractors/sub-contractors.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'application-form',
    component: ApplicationFormComponent,
    children: [
      {
        path: '',
        component: Step1StandardsComponent
      },
      {
        path: 'step1-standards',
        component: Step1StandardsComponent
      },
      {
        path: 'step2-type-application',
        component: Step2TypeApplicationComponent
      },
      {
        path: 'step3-personal-details',
        component: Step3PersonalDetailsComponent
      },
      {
        path: 'step4-additional-mandatory',
        component: Step4AdditionalMandatoryComponent
      },
      {
        path: 'step5-company-details',
        component: Step5CompanyDetailsComponent
      },
      {
        path: 'step6-main-site-details',
        component: Step6MainSiteDetailsComponent
      },
      {
        path: 'step7-additonal-site',
        component: Step7AdditonalSiteComponent
      },
      {
        path: 'step8-additonal-site2',
        component: Step8AdditionalSite2Component
      },
      {
        path: 'step9-additonal-site3',
        component: Step9AdditonalSite3Component
      },
      {
        path: 'sub-contractors',
        component: SubContractorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartApplicationRoutingModule { }
