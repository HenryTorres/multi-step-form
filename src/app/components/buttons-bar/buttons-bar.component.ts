import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormService } from '../../services/form-service.service';

@Component({
  selector: 'buttons-bar',
  standalone: true,
  imports: [],
  templateUrl: './buttons-bar.component.html',
  styleUrl: './buttons-bar.component.css'
})
export class ButtonsBarComponent implements OnChanges {
  @Input() textButton: string = '';

  @Output() onNextStep = new EventEmitter<void>();
  @Output() onPreviousStep = new EventEmitter<void>();

  currentStep: number = 1;

  constructor(private readonly formService: FormService) { }

  ngOnChanges(): void {
    this.currentStep = this.formService.currentStep;
  }

  nextStep(event: Event) {
    event.preventDefault();
    this.onNextStep.emit();
    this.currentStep = this.formService.currentStep;
  }

  previousStep(event: Event) {
    event.preventDefault();
    this.onPreviousStep.emit();
    this.currentStep = this.formService.currentStep;
  }
}
