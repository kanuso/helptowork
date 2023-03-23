import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import formFields from '../../../form-fields.json';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  formFields: any[] = formFields.fields;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    let formGroup = {};
    for (let field of this.formFields) {
      formGroup[field.name] = new FormControl(field.value || '', field.required ? Validators.required : null);
    }
    this.form = new FormGroup(formGroup);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
