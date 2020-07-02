import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationFormService {

  step1: any;
  step2: any;
  step3: any;

  constructor() { }

  // step 1
  setStep1Data(data) {
    this.step1 = data;
  }

  getStep1Data() {
    return this.step1;
  }

  // step 2
  setStep2Data(data) {
    this.step2 = data;
  }

  getStep2Data() {
    return this.step2;
  }

  // step 3
  setStep3Data(data) {
    this.step3 = data;
  }

  getStep3Data() {
    return this.step3;
  }

}
