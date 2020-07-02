import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApplicationFormService } from '../../../../core/services/application-form/application-form.service';

@Component({
  selector: 'app-step1-standards',
  templateUrl: './step1-standards.component.html',
  styleUrls: ['./step1-standards.component.scss']
})
export class Step1StandardsComponent implements OnInit {

  step1Form: FormGroup;

  constructor(
    private dataHoldingApplication: ApplicationFormService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.step1FormInit();
  }

  step1FormInit() {
    this.step1Form = this.fb.group({
      sia_acs: [''],
      ccas_passport: [''],
      nsi_gold: [''],
      iso_nine_thousand_one: [''],
      iso_fourteen_thousand_one: [''],
      iso_fourty_five_thousand_one: [''],
      investor_in_people: [''],
      safe_contractor: [''],
      construction_line: [''],
      builders_profile: [''],
      achilles: [''],
      sisqs: [''],
      ssip: [''],
      chas: [''],
      smas: [''],
      competent_health_and_safety_advisor: [''],
      cdm_cordinator: [''],
      fire_risk_aasessment: ['']
    });
  }

  proceed() {
    let data = {
      sia_acs: this.step1Form.value.sia_acs,
      ccas_passport: this.step1Form.value.ccas_passport,
      nsi_gold: this.step1Form.value.nsi_gold,
      iso_nine_thousand_one: this.step1Form.value.iso_nine_thousand_one,
      iso_fourteen_thousand_one: this.step1Form.value.iso_fourteen_thousand_one,
      iso_fourty_five_thousand_one: this.step1Form.value.iso_fourty_five_thousand_one,
      investor_in_people: this.step1Form.value.investor_in_people,
      safe_contractor: this.step1Form.value.safe_contractor,
      construction_line: this.step1Form.value.construction_line,
      builders_profile: this.step1Form.value.builders_profile,
      achilles: this.step1Form.value.achilles,
      sisqs: this.step1Form.value.sisqs,
      ssip: this.step1Form.value.ssip,
      chas: this.step1Form.value.chas,
      smas: this.step1Form.value.smas,
      competent_health_and_safety_advisor: this.step1Form.value.competent_health_and_safety_advisor,
      cdm_cordinator: this.step1Form.value.cdm_cordinator,
      fire_risk_aasessment: this.step1Form.value.fire_risk_aasessment
    }

    this.dataHoldingApplication.setStep1Data(data);
    this.router.navigateByUrl('/start-application/application-form/step2-type-application');
  }

}
