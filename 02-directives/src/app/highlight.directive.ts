import { Directive, HostListener, HostBinding } from '@angular/core';
//import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

    @HostListener('mouseenter') mouseOver() {
        this.backgroundColor = 'green';
        //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'green');
    }
    @HostListener('mouseleave') mouseLeave() {
        this.backgroundColor = 'white';
        //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    }

    @HostBinding('style.backgroundColor') get setColor() {
        return this.backgroundColor;
    }

    private backgroundColor = 'white';
    constructor() { }

    // constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    //   //Not recommended
    //   //this._elementRef.nativeElement.style.backgroundColor = 'green';

    //   this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'blue');

    // }

}
