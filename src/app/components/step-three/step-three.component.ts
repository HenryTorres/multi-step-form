import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form-service.service';
import { IAddOn } from '../../interfaces/i-personal-info';
import { HeaderStepComponent } from '../header-step/header-step.component';

@Component({
  selector: 'step-three',
  standalone: true,
  imports: [HeaderStepComponent],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.css'
})
export class StepThreeComponent implements OnInit {

  planType: string = '';
  tempPriceOnline: number = 0;
  tempPriceLarger: number = 0;
  tempPriceCustomizable: number = 0;

  addOn: IAddOn = {
    onlineChecked: false,
    largerChecked: false,
    customizableChecked: false,
    priceOnline: 0,
    priceLarger: 0,
    priceCustomizable: 0
  };

  constructor(private readonly formService: FormService) { }

  ngOnInit(): void {

    this.formService.stepThreeValid = true;
    this.addOn = { ...this.formService.addOn };
    this.planType = this.formService.plan.yearly ? 'yr' : 'mo';

    if (this.addOn.onlineChecked) {
      if (this.formService.plan.yearly) {
        this.addOn.priceOnline = 10;
      } else {
        this.addOn.priceOnline = 1;
      }
    }

    if (this.addOn.largerChecked) {
      if (this.formService.plan.yearly) {
        this.addOn.priceLarger = 20;
      } else {
        this.addOn.priceLarger = 2;
      }
    }

    if (this.addOn.customizableChecked) {
      if (this.formService.plan.yearly) {
        this.addOn.priceCustomizable = 20;
      } else {
        this.addOn.priceCustomizable = 2;
      }
    }

    this.formService.saveAddOn(this.addOn);
  }

  onlineClick() {
    this.addOn.onlineChecked = !this.addOn.onlineChecked;
    if (!this.addOn.onlineChecked) { this.addOn.priceOnline = 0; }

    if (this.addOn.onlineChecked) {
      if (this.formService.plan.yearly) {
        this.addOn.priceOnline = 10;
      } else {
        this.addOn.priceOnline = 1;
      }
    }

    this.formService.saveAddOn(this.addOn);
  }

  largerClick() {
    this.addOn.largerChecked = !this.addOn.largerChecked;
    if (!this.addOn.largerChecked) { this.addOn.priceLarger = 0; }

    if (this.addOn.largerChecked) {
      if (this.formService.plan.yearly) {
        this.addOn.priceLarger = 20;
      } else {
        this.addOn.priceLarger = 2;
      }
    }

    this.formService.saveAddOn(this.addOn);
  }

  customizableClick() {
    this.addOn.customizableChecked = !this.addOn.customizableChecked;
    if (!this.addOn.customizableChecked) { this.addOn.priceCustomizable = 0; }

    if (this.addOn.customizableChecked) {
      if (this.formService.plan.yearly) {
        this.addOn.priceCustomizable = 20;
      } else {
        this.addOn.priceCustomizable = 2;
      }
    }

    this.formService.saveAddOn(this.addOn);
  }

}
