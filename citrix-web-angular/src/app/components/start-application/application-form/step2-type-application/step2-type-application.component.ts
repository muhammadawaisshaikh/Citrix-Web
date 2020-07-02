import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApplicationFormService } from '../../../../core/services/application-form/application-form.service';

@Component({
  selector: 'app-step2-type-application',
  templateUrl: './step2-type-application.component.html',
  styleUrls: ['./step2-type-application.component.scss']
})
export class Step2TypeApplicationComponent implements OnInit {

  step2Form: FormGroup;

  constructor(
    private dataHoldingApplication: ApplicationFormService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.step2FormInit();
  }

  step2FormInit() {
    this.step2Form = this.fb.group({
      application_type: [''],
    });
  }

  proceed() {

    let data = {
      application_type: this.step2Form.value.application_type,
    }

    this.dataHoldingApplication.setStep2Data(data);
    this.router.navigateByUrl('/start-application/application-form/step3-personal-details');
  }

}
