import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormService } from '../../services/form-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'step-one',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css'
})
export class StepOneComponent implements OnInit {

  @Output() onValidation = new EventEmitter<boolean>;

  stepForm!: FormGroup;

  private emailRegexp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private phoneRegex: RegExp = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

  constructor(
    private readonly formService: FormService) {

    this.stepForm = new FormGroup({
      name: new FormControl('Juan', [Validators.required]),
      email: new FormControl('aaa@aaa.aaa', [Validators.required, Validators.pattern(this.emailRegexp)]),
      phone: new FormControl('888888888', [Validators.required, Validators.pattern(this.phoneRegex)]),
    })
  }

  ngOnInit(): void {
    this.stepForm.setValue(this.formService.getPersonalInfo());
  }

  onBlurName() {
    this.formService.savePersonalInfo(this.stepForm.value);
    this.onValidation.emit(this.stepForm.valid);
  }

  onBlurEmail() {
    this.formService.savePersonalInfo(this.stepForm.value);
    this.onValidation.emit(this.stepForm.valid);
  }

  onBlurPhone() {
    this.formService.savePersonalInfo(this.stepForm.value);
    this.onValidation.emit(this.stepForm.valid);
  }

  // validName(value: string) {
  //   if (value.trim().length == 0) {
  //     this.renderer.setProperty(
  //       this.nameMessageError.nativeElement,
  //       'innerText',
  //       'This field is required');
  //     this.personal.name = '';
  //     this.nameValid = false;
  //   } else {
  //     this.renderer.setProperty(
  //       this.nameMessageError.nativeElement,
  //       'innerText', '');
  //     this.personal.name = value.trim();
  //     this.nameValid = true;
  //   }

  //   this.sendValidation();
  // }

  // validEmail(value: string) {
  //   const emailRegexp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (!emailRegexp.test(value)) {
  //     this.renderer.setProperty(
  //       this.emailMessageError.nativeElement,
  //       'innerText', 'This email address is not formatted correctly');
  //     this.personal.email = '';
  //     this.emailValid = false;
  //   } else {
  //     this.renderer.setProperty(
  //       this.emailMessageError.nativeElement,
  //       'innerText', '');
  //     this.personal.email = value;
  //     this.emailValid = true;
  //   }

  //   this.sendValidation();
  // }

  // validPhone(value: string) {
  //   const phoneRegex: RegExp = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
  //   if (!phoneRegex.test(value)) {
  //     this.renderer.setProperty(
  //       this.phoneMessageError.nativeElement,
  //       'innerText', 'This phone number is not formatted correctly');
  //     this.personal.phone = '';
  //     this.phoneValid = false;
  //   } else {
  //     this.renderer.setProperty(
  //       this.phoneMessageError.nativeElement,
  //       'innerText', '');
  //     this.personal.phone = value;
  //     this.phoneValid = true;
  //   }

  //   this.sendValidation();
  // }

  // sendValidation() {
  //   if (this.nameValid && this.emailValid && this.phoneValid) {
  //     this.onValidation.emit(true);
  //   } else {
  //     this.onValidation.emit(false);
  //   }
  //   this.formService.savePersonalInfo(this.personal);
  //   console.log(this.personal);
  // }
}
