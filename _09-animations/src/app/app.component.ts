import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800))
    ])
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item: string): void {
    this.list.push(item);
  }

  onDelete(item: string): void {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate(): void {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

}
