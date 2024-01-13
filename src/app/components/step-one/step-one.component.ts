import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormService } from '../../services/form-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderStepComponent } from '../header-step/header-step.component';

@Component({
  selector: 'step-one',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderStepComponent],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css'
})
export class StepOneComponent implements OnInit {
  nameError: boolean = false;
  stepForm!: FormGroup;

  private emailRegexp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private phoneRegex: RegExp = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

  constructor(private readonly formService: FormService) {
    this.stepForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegexp)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phoneRegex)]),
    })
  }

  get name() { return this.stepForm.get('name'); }
  get email() { return this.stepForm.get('email'); }
  get phone() { return this.stepForm.get('phone'); }

  ngOnInit(): void {
    this.stepForm.setValue(this.formService.getPersonalInfo());
    this.formService.stepOneValid = this.stepForm.valid;
  }

  onBlurName() {
    this.formService.savePersonalInfo(this.stepForm.value);
    this.formService.stepOneValid = this.stepForm.valid;
  }

  onBlurEmail() {
    this.formService.savePersonalInfo(this.stepForm.value);
    this.formService.stepOneValid = this.stepForm.valid;
  }

  onBlurPhone() {
    this.formService.savePersonalInfo(this.stepForm.value);
    this.formService.stepOneValid = this.stepForm.valid;
  }
}
