import { Injectable } from '@angular/core';
import { IAddOn, IPersonalInfo, IPlan } from '../interfaces/i-personal-info';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  stepOneValid: boolean = false;
  stepTwoValid: boolean = false;
  stepThreeValid: boolean = false;
  stepFourValid: boolean = false;

  personal: IPersonalInfo = {
    name: 'Henry',
    email: 'henry@gmail.com',
    phone: '999999999'
  }

  plan: IPlan = {
    arcade: '',
    advance: '',
    pro: '',
    priceArcade: 0,
    priceAdvance: 0,
    pricePro: 0,
    yearly: false
  }

  addOn: IAddOn = {
    onlineChecked: false,
    largerChecked: false,
    customizableChecked: false,
    priceOnline: 0,
    priceLarger: 0,
    priceCustomizable: 0
  }

  total: number = 0;


  constructor() { }

  savePersonalInfo(data: IPersonalInfo) {
    this.personal = data;
  }

  getPersonalInfo(): IPersonalInfo {
    return this.personal;
  }

  savePlan(plan: IPlan) {
    this.plan = plan;
  }

  getPlan(): IPlan { return this.plan; }

  saveAddOn(addOn: IAddOn) {
    this.addOn = addOn;
  }

  getAddOn(): IAddOn { return this.addOn; }

  getTotal(): number {
    this.total = this.plan.priceArcade +
      this.plan.priceAdvance +
      this.plan.pricePro +
      this.addOn.priceOnline +
      this.addOn.priceLarger +
      this.addOn.priceCustomizable;

    return this.total;
  }


}
