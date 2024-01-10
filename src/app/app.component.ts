import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ButtonsBarComponent } from './components/buttons-bar/buttons-bar.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepFourComponent } from './components/step-four/step-four.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarComponent, ButtonsBarComponent, StepOneComponent, StepTwoComponent, StepThreeComponent, StepFourComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentStep: number = 1;
  stepOneValid: boolean = false;

  nextStep() {
    if (this.stepOneValid) {
      if (this.currentStep == 4) { return; }
      this.currentStep++;
    }
    console.log(this.stepOneValid)
  }

  previousStep() {
    if (this.currentStep == 1) { return; }
    this.currentStep--;
  }

  validationStepOne(valid: boolean) {
    this.stepOneValid = valid;
  }
}
