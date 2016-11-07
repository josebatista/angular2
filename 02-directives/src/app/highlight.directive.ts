import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';
//import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

    @HostListener('mouseenter') mouseOver() {
        this.backgroundColor = this.highlightColor;
        //this.backgroundColor = 'green';
        //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'green');
    }
    @HostListener('mouseleave') mouseLeave() {
        this.backgroundColor = this.defaultColor;
        //this.backgroundColor = 'white';
        //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    }

    @HostBinding('style.backgroundColor') get setColor() {
        return this.backgroundColor;
    }

    @Input() defaultColor = 'white';
    @Input('highlight') highlightColor = 'green';

    private backgroundColor: string;
    //private backgroundColor = 'white';
    constructor() { }

    // constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    //   //Not recommended
    //   //this._elementRef.nativeElement.style.backgroundColor = 'green';

    //   this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'blue');

    // }
    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

}
