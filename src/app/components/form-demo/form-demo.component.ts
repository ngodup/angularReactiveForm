import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MockDepartment } from 'src/assets/data/mockDepartment';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {
  title: string = 'Angular Reactive Form';
  form = new FormGroup({});
  departments: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'number': [null, Validators.required],
      'description': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      'sinceFrom': [''],
      'category': [null, Validators.required],
      'classType': [],
    });
    this.departments = MockDepartment;
  }

  submit(form: NgForm) {
    console.log(form);
  }

}
