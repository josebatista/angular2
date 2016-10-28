import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete = !delete">Click to delete</button>
    <button (click)="test = 'Changing value!'">Click to change Content</button>
    <button (click)="boundValue = 2000">Click to change Binding</button>
  `
})
export class AppComponent {
  delete = false;
  test = 'Starting value';
  boundValue = 1000;
}

