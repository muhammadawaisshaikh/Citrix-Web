import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { Step1StandardsComponent } from './application-form/step1-standards/step1-standards.component';
import { Step2TypeApplicationComponent } from './application-form/step2-type-application/step2-type-application.component';
import { Step3PersonalDetailsComponent } from './application-form/step3-personal-details/step3-personal-details.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartApplicationRoutingModule { }
