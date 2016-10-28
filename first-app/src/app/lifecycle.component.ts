import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

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
