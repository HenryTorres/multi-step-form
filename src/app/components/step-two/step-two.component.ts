import { Component, OnInit, ViewChild } from '@angular/core';
import { FormService } from '../../services/form-service.service';
import { IPlan } from '../../interfaces/i-personal-info';
import { HeaderStepComponent } from '../header-step/header-step.component';

@Component({
  selector: 'step-two',
  standalone: true,
  imports: [HeaderStepComponent],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.css'
})
export class StepTwoComponent implements OnInit {
  plan: IPlan = {
    arcade: '',
    advance: '',
    pro: '',
    priceArcade: 0,
    priceAdvance: 0,
    pricePro: 0,
    yearly: false
  }


  @ViewChild('chkYearly') chkYearly: any;

  constructor(private readonly formService: FormService) { }

  ngOnInit(): void {
    this.plan = { ...this.formService.getPlan() };
    this.validationState();
  }

  changePlan() {
    this.plan.yearly = this.chkYearly.nativeElement.checked;

    if (this.plan.arcade == 'active') {
      this.plan.priceArcade = this.plan.yearly ? 90 : 9;
      this.plan.priceAdvance = 0;
      this.plan.pricePro = 0;
    }

    if (this.plan.advance == 'active') {
      this.plan.priceAdvance = this.plan.yearly ? 120 : 12;
      this.plan.priceArcade = 0;
      this.plan.pricePro = 0;
    }

    if (this.plan.pro == 'active') {
      this.plan.pricePro = this.plan.yearly ? 150 : 15;
      this.plan.priceAdvance = 0;
      this.plan.priceArcade = 0;
    }

    this.saveState();
    this.validationState();
  }

  selArcade() {
    this.plan.arcade = 'active';
    this.plan.advance = '';
    this.plan.pro = '';
    this.plan.priceArcade = this.plan.yearly ? 90 : 9;
    this.plan.priceAdvance = 0;
    this.plan.pricePro = 0;
    this.saveState();
    this.validationState();
  }

  selAdvance() {
    this.plan.arcade = '';
    this.plan.advance = 'active';
    this.plan.pro = '';
    this.plan.priceArcade = 0;
    this.plan.priceAdvance = this.plan.yearly ? 120 : 12;
    this.plan.pricePro = 0;
    this.saveState();
    this.validationState();
  }

  selPro() {
    this.plan.arcade = '';
    this.plan.advance = '';
    this.plan.pro = 'active';
    this.plan.priceArcade = 0;
    this.plan.priceAdvance = 0;
    this.plan.pricePro = this.plan.yearly ? 150 : 15;
    this.saveState();
    this.validationState();
  }

  saveState() {
    this.formService.savePlan(this.plan);
  }

  validationState() {
    if (this.plan.arcade == '' && this.plan.advance == '' && this.plan.pro == '') {
      this.formService.stepTwoValid = false;
      return;
    }

    if (this.plan.arcade == 'active' || this.plan.advance == 'active' || this.plan.pro == 'active') {
      this.formService.stepTwoValid = true;
      return;
    }
  }
}
