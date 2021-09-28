import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  emailValid(control: FormControl) {
    return new Promise(resolve => {
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!emailPattern.test(control.value)) {
        resolve({ invalidEmail: true });
      }
      resolve(null);
    });
  }

  nameValid(control: FormControl) {
    return new Promise(resolve => {
      const pattern = /[0-9]/;
      if (pattern.test(control.value)) {
        resolve({ invalidName: true });
      }
      resolve(null);
    });
  }
}
