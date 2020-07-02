import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHoldingService {

  data: any;

  constructor() { }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

}
