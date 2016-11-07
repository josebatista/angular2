import {
    Component,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild,
    ContentChild
} from '@angular/core';

@Component({
    selector: 'fa-lifecycle',
    template: `
    <ng-content></ng-content>
    <hr />
    <p #boundView>{{bindable}}</p>
  `,
    styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() bindable = 1000;

    @ViewChild('boundView')
    boundTemplate: HTMLElement;

    @ContentChild('boundContent')
    boundContent: HTMLElement;

    constructor() { }

    ngOnChanges() {
        this.log('OnChanges');
    }
    ngOnInit() {
        this.log('OnInit');
    }
    ngDoCheck() {
        this.log('DoCheck');
    }
    ngAfterContentInit() {
        this.log('AfterContentInit');
        console.log(this.boundContent);
    }
    ngAfterContentChecked() {
        this.log('AfterContentChecked');
    }
    ngAfterViewInit() {
        this.log('AfterViewInit');
        console.log(this.boundTemplate);
    }
    ngAfterViewChecked() {
        this.log('AfterViewChecked');
    }
    ngOnDestroy() {
        this.log('OnDestroy');
    }

    private log(hook: string) {
        console.log(hook);
    }
}
