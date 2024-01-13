import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormService } from '../../services/form-service.service';
import { IAddOn } from '../../interfaces/i-personal-info';
import { HeaderStepComponent } from '../header-step/header-step.component';

@Component({
  selector: 'step-four',
  standalone: true,
  imports: [HeaderStepComponent],
  templateUrl: './step-four.component.html',
  styleUrl: './step-four.component.css'
})
export class StepFourComponent implements OnInit {

  @Output() onBackStepTwo = new EventEmitter<void>();

  constructor(private readonly formService: FormService) { }

  plan: string = '';
  typePlan: string = '';
  timePlan: string = '';
  pricePlan: number = 0;
  total: number = 0;

  addOn!: IAddOn;

  ngOnInit(): void {

    if (this.formService.plan.arcade === 'active') {
      this.plan = "Arcade";
      this.pricePlan = this.formService.plan.priceArcade;
    } else if (this.formService.plan.advance === 'active') {
      this.plan = "Advance";
      this.pricePlan = this.formService.plan.priceAdvance;
    } else {
      this.plan = "Pro";
      this.pricePlan = this.formService.plan.pricePro;
    }

    this.addOn = { ...this.formService.getAddOn() };

    this.typePlan = this.formService.plan.yearly ? 'Yearly' : 'Monthly';
    this.timePlan = this.formService.plan.yearly ? 'yr' : 'mo';

    this.total = this.formService.getTotal();
  }

  backStepTwo() {
    this.onBackStepTwo.emit();
  }


}
