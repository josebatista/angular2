import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
