import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
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

@NgModule({
  declarations: [CertificationsComponent, SiaAcsComponent, CcasPassportComponent, NsiGoldComponent, IsoNineThousandOneComponent, IsoFourteenThousandOneComponent, IsoFourtyFiveThousandOneComponent, InvestorInPeopleComponent, SafeContractorComponent, ConstructionLineComponent, BuildersProfileComponent, AchillesComponent, SisqsComponent, SsipComponent, ChasComponent, SmasComponent, CompetentHealthAndSafetyAdvisorComponent, CdmCordinatorComponent, FireRiskAasessmentComponent],
  imports: [
    CommonModule,
    CertificationsRoutingModule
  ]
})
export class CertificationsModule { }
