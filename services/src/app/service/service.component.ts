import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
  `,
  styles: []
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
