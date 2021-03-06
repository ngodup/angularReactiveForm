import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MockDepartment } from 'src/assets/data/mockDepartment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Angular Reactive Form';
  form = new FormGroup({});
  departments: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      number : '',
      description: '',
      sinceFrom: '',
      category: '',
      classType: '',
    });
    this.departments = MockDepartment;
  }

  submit(form: NgForm) {
    console.log(form);
  }
}
