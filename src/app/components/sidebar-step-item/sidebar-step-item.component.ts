import { Component, Input } from '@angular/core';

@Component({
  selector: 'step-item',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-step-item.component.html',
  styleUrl: './sidebar-step-item.component.css'
})
export class SideBarStepItemComponent {
  @Input() step: number = 0;
  @Input() stepText: string = '';

  @Input() selected: boolean = false;
}
