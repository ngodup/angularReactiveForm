import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, NgForm } from '@angular/forms';
import { CustomValidatorService } from 'src/app/services/custom-validator.service';

@Component({
  selector: 'app-custom-validator-form',
  templateUrl: './custom-validator-form.component.html',
  styleUrls: ['./custom-validator-form.component.scss']
})
export class CustomValidatorFormComponent implements OnInit {
  form = new FormGroup({});

  constructor(private fb: FormBuilder,
    private customValidator: CustomValidatorService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required, this.customValidator.nameValid],
      email: ['', Validators.required, this.customValidator.emailValid],
      platform: ['', Validators.required]
    });

    const name = this.form.controls.name;
    name.valueChanges.subscribe((value: string) => {
      console.log(`Entered name is ${value}`);
    });
  }

  submit(form: NgForm) {
    console.dir(form);
  }

}
