import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificationsComponent } from './certifications.component';
import { SiaAcsComponent } from './sia-acs/sia-acs.component';
import { CcasPassportComponent } from './ccas-passport/ccas-passport.component';
import { NsiGoldComponent } from './nsi-gold/nsi-gold.component';
import { IsoNineThousandOneComponent } from './iso-nine-thousand-one/iso-nine-thousand-one.component';
import { IsoFourteenThousandOneComponent } from './iso-fourteen-thousand-one/iso-fourteen-thousand-one.component';
import { IsoFourtyFiveThousandOneComponent } from './iso-fourty-five-thousand-one/iso-fourty-five-thousand-one.component';
import { InvestorInPeopleComponent } from './investor-in-people/investor-in-people.component';
import { SafeContractorComponent } from './safe-contractor/safe-contractor.component';
import { ConstructionLineComponent } from './construction-line/construction-line.component';
import { BuildersProfileComponent } from './builders-profile/builders-profile.component';
import { AchillesComponent } from './achilles/achilles.component';
import { SisqsComponent } from './sisqs/sisqs.component';
import { SsipComponent } from './ssip/ssip.component';
import { ChasComponent } from './chas/chas.component';
import { SmasComponent } from './smas/smas.component';
import { CompetentHealthAndSafetyAdvisorComponent } from './competent-health-and-safety-advisor/competent-health-and-safety-advisor.component';
import { CdmCordinatorComponent } from './cdm-cordinator/cdm-cordinator.component';
import { FireRiskAasessmentComponent } from './fire-risk-aasessment/fire-risk-aasessment.component';

const routes: Routes = [
  {
    path: '',
    component: CertificationsComponent,
    children: [
      {
        path: '',
        component: SiaAcsComponent
      },
      {
        path: 'certifications/sia-acs',
        component: SiaAcsComponent
      },
      {
        path: 'certifications/ccas-passport',
        component: CcasPassportComponent
      },
      {
        path: 'certifications/nsi-gold',
        component: NsiGoldComponent
      },
      {
        path: 'certifications/iso-nine-thousand-one',
        component: IsoNineThousandOneComponent
      },
      {
        path: 'certifications/iso-fourteen-thousand-one',
        component: IsoFourteenThousandOneComponent
      },
      {
        path: 'certifications/iso-fourty-five-thousand-one',
        component: IsoFourtyFiveThousandOneComponent
      },
      {
        path: 'certifications/investor-in-people',
        component: InvestorInPeopleComponent
      },
      {
        path: 'certifications/safe-contractor',
        component: SafeContractorComponent
      },
      {
        path: 'certifications/construction-line',
        component: ConstructionLineComponent
      },
      {
        path: 'certifications/builders-profile',
        component: BuildersProfileComponent
      },
      {
        path: 'certifications/achilles',
        component: AchillesComponent
      },
      {
        path: 'certifications/sisqs',
        component: SisqsComponent
      },
      {
        path: 'certifications/ssip',
        component: SsipComponent
      },
      {
        path: 'certifications/chas',
        component: ChasComponent
      },
      {
        path: 'certifications/smas',
        component: SmasComponent
      },
      {
        path: 'certifications/competent-health-and-safety-advisor',
        component: CompetentHealthAndSafetyAdvisorComponent
      },
      {
        path: 'certifications/cdm-cordinator',
        component: CdmCordinatorComponent
      },
      {
        path: 'certifications/fire-risk-aasessment',
        component: FireRiskAasessmentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationsRoutingModule { }
