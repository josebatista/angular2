import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[listenerPassingData]'
})
export class ListenerPassingDataDirective {

  @HostListener('click', ['$event']) onClick(event) {
    console.log("Event target " + event.target);
  }

  constructor() { }

}
