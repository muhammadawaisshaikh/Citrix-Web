import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApplicationService } from '../../../../core/http/application/application.service';
import { ApplicationFormService } from '../../../../core/services/application-form/application-form.service';

@Component({
  selector: 'app-step3-personal-details',
  templateUrl: './step3-personal-details.component.html',
  styleUrls: ['./step3-personal-details.component.scss']
})
export class Step3PersonalDetailsComponent implements OnInit {

  step3Form: FormGroup;
  step1Data: any;
  step2Data: any;
  step3Data: any;

  constructor(
    private applicationService: ApplicationService,
    private dataHoldingApplication: ApplicationFormService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.step3FormInit();
  }

  step3FormInit() {
    this.step3Form = this.fb.group({
      company_name: [''],
      your_name: [''],
      position: [''],
      contact: [''],
      email: [''],
      how_did_you_hear: [''],
    });
  }

  saveApplication() {

    let data = {
      company_name: this.step3Form.value.company_name,
      your_name: this.step3Form.value.your_name,
      position: this.step3Form.value.position,
      contact: this.step3Form.value.contact,
      email: this.step3Form.value.email,
      how_did_you_hear: this.step3Form.value.how_did_you_hear,
    }
    this.dataHoldingApplication.setStep3Data(data);

    // getting all steps data from data holding service 
    this.step1Data = this.dataHoldingApplication.getStep1Data();
    this.step2Data = this.dataHoldingApplication.getStep2Data();
    this.step3Data = this.dataHoldingApplication.getStep3Data();
    
    let params = {
      achilles: this.step1Data.achilles,
      builders_profile: this.step1Data.builders_profile,
      ccas_passport: this.step1Data.ccas_passport,
      cdm_cordinator: this.step1Data.cdm_cordinator,
      chas: this.step1Data.chas,
      competent_health_and_safety_advisor: this.step1Data.competent_health_and_safety_advisor,
      construction_line: this.step1Data.construction_line,
      fire_risk_aasessment: this.step1Data.fire_risk_aasessment,
      investor_in_people: this.step1Data.investor_in_people,
      iso_fourteen_thousand_one: this.step1Data.iso_fourteen_thousand_one,
      iso_fourty_five_thousand_one: this.step1Data.iso_fourty_five_thousand_one,
      nsi_gold: this.step1Data.nsi_gold,
      safe_contractor: this.step1Data.safe_contractor,
      sia_acs: this.step1Data.sia_acs,
      sisqs: this.step1Data.sisqs,
      smas: this.step1Data.smas,
      ssip: this.step1Data.ssip,
      application_type: this.step2Data.application_type,
      company_name: this.step3Data.company_name,
      contact: this.step3Data.contact,
      email: this.step3Data.email,
      how_did_you_hear: this.step3Data.how_did_you_hear,
      position: this.step3Data.position,
      your_name: this.step3Data.your_name,
    }

    this.applicationService.addApplication(params).subscribe(
      (res)=> {
        console.log(res);

        if (res) {
          alert('Application Submitted Successfully');
          this.router.navigateByUrl('/');
        }
      },
      (error)=> {
        console.log(error);
      }
    );

  }

}
