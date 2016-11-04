import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    //Not recommended
    //this._elementRef.nativeElement.style.backgroundColor = 'green';

    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'blue');

  }

}
