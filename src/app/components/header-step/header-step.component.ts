import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-step',
  standalone: true,
  imports: [],
  templateUrl: './header-step.component.html',
  styleUrl: './header-step.component.css'
})
export class HeaderStepComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
