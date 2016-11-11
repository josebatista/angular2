import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'si-cmp-a',
  template: `
  <div>
    <input type="text" />
    <button (click)="onLog()">Log</button>
    <button (click)="onStore()">Store</button>
    <button (click)="onSend()">Send</button>
  </div>
  <hr />
  <div>
    <button (click)="onGet()">Refresh Storage</button>
    <h3>Storage</h3>
    <ul>
      <li></li>
    </ul>
    <h3>Received Value</h3>
    <p>{{value}}</p>
  </div>
  `,
  styles: []
})
export class CmpAComponent implements OnInit {

  value = '';

  constructor() { }

  ngOnInit() {
  }

}
