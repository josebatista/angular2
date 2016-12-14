import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'data-driven',
  templateUrl: './data-driven.component.html'
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  genders = ['male', 'female'];

  constructor(private formBuilder: FormBuilder) {
    // this.myForm = new FormGroup({
    //   'userData': new FormGroup({
    //     'username': new FormControl('Testando', Validators.required),
    //     'email': new FormControl('', [
    //       Validators.required,
    //       Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    //     ])
    //   }),
    //   'password': new FormControl('', Validators.required),
    //   'gender': new FormControl('male'),
    //   'hobbies': new FormArray([
    //     new FormControl('Cooking', Validators.required)
    //   ])
    // });

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['Testando', [Validators.required, this.exampleValidator]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required]
      ])
    });

  }

  ngOnInit() {
  }

  onAddHobby() {
    (<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required));
  }

  onSubmit() {
    console.log(this.myForm);
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Example') {
      return {example: true};
    }
    return null;
  }

}
