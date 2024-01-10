import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SideBarStepItemComponent } from '../sidebar-step-item/sidebar-step-item.component';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [SideBarStepItemComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnChanges {

  @Input() currentStep: number = 1;

  stepOneSelected: boolean = false;
  stepTwoSelected: boolean = false;
  stepThreeSelected: boolean = false;
  stepFourSelected: boolean = false;

  ngOnChanges(): void {
    switch (this.currentStep) {
      case 1:
        this.stepOneSelected = true;
        this.stepTwoSelected = false;
        this.stepThreeSelected = false;
        this.stepFourSelected = false;
        break;
      case 2:
        this.stepOneSelected = false;
        this.stepTwoSelected = true;
        this.stepThreeSelected = false;
        this.stepFourSelected = false;
        break;
      case 3:
        this.stepOneSelected = false;
        this.stepTwoSelected = false;
        this.stepThreeSelected = true;
        this.stepFourSelected = false;
        break;
      case 4:
        this.stepOneSelected = false;
        this.stepTwoSelected = false;
        this.stepThreeSelected = false;
        this.stepFourSelected = true;
        break;
    }
  }

}
