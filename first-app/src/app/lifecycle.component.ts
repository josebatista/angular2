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
  Input
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr />
    <p>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000;

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
  }
  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('AfterViewInit');
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
