import { Injectable } from '@angular/core';
import { IPersonalInfo } from '../interfaces/i-personal-info';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  personal: IPersonalInfo = {
    name: '',
    email: '',
    phone: ''
  }

  constructor() { }

  savePersonalInfo(data: IPersonalInfo) {
    this.personal = data;
  }

  getPersonalInfo() {
    return this.personal;
  }

}
