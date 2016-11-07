import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private switchProperty = true;

  onSwitch() {
    this.switchProperty = !this.switchProperty;
  }

}
