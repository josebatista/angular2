import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <h3>Some user detail</h3>
  `,
  styles: []
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("UserDetail OnInit");
  }

}
