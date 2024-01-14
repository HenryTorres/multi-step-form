import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ButtonsBarComponent } from './components/buttons-bar/buttons-bar.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepFourComponent } from './components/step-four/step-four.component';
import { FormService } from './services/form-service.service';
import { ThanksComponent } from './components/thanks/thanks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarComponent, ButtonsBarComponent, StepOneComponent, StepTwoComponent, StepThreeComponent, StepFourComponent, ThanksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentStep: number = 1;
  textButton: string = 'Next Step';

  constructor(private readonly formService: FormService) { }

  nextStep() {
    if (this.currentStep == 5) { return; }

    if (this.currentStep == 1) {
      if (this.formService.stepOneValid) {
        this.currentStep = 2;
        this.textButton = "Next Step";
        this.formService.currentStep = this.currentStep;
        return;
      }
    }

    if (this.currentStep == 2) {
      if (this.formService.stepTwoValid) {
        this.currentStep = 3;
        this.textButton = "Next Step";
        this.formService.currentStep = this.currentStep;
        return;
      }
    }

    if (this.currentStep == 3) {
      if (this.formService.stepThreeValid) {
        this.currentStep = 4;
        this.textButton = "Confirm";
        this.formService.currentStep = this.currentStep;
        return;
      }
    }

    if (this.currentStep == 4) {
      this.currentStep = 5;
      this.formService.currentStep = this.currentStep;
      return;
    }
  }

  previousStep() {
    if (this.currentStep == 1) { return; }
    this.currentStep--;
    this.formService.currentStep = this.currentStep;

    if (this.currentStep == 1 || this.currentStep == 2 || this.currentStep == 3) {
      this.textButton = "Next Step";
    }
  }

  backStepTwo() {
    this.currentStep = 2;
    this.textButton = "Next Step";
    this.formService.currentStep = this.currentStep;
  }
}
