import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private switchProperty = true;
  private items = [1, 2, 3, 4, 5];

  onSwitch() {
    this.switchProperty = !this.switchProperty;
  }

}
