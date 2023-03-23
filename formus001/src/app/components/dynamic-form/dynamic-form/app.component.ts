import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  template: `
    <form [formGroup]="myForm" (submit)="onSubmit()">
      <input type="text" formControlName="myInput">
      <button type="submit">Enviar</button>
    </form>
  `,
})
export class MyComponent {
  myForm = new FormGroup({
    myInput: new FormControl(),
  });

  onSubmit() {
    console.log(this.myForm.value);
  }
}
