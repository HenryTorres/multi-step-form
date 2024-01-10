import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'buttons-bar',
  standalone: true,
  imports: [],
  templateUrl: './buttons-bar.component.html',
  styleUrl: './buttons-bar.component.css'
})
export class ButtonsBarComponent {
  @Input() stepOneValid: boolean = false;

  @Output() onNextStep = new EventEmitter<void>();
  @Output() onPreviousStep = new EventEmitter<void>();


  constructor() { }

  nextStep(event: Event) {
    event.preventDefault();
    this.onNextStep.emit();
  }

  previousStep(event: Event) {
    event.preventDefault();
    this.onPreviousStep.emit();
  }
}
