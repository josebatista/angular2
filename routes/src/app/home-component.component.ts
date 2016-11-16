import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/RX';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      home-component Works!
    </h1>
    <hr />
    {{param}}
  `
})
export class HomeComponent implements OnInit, OnDestroy {

  private subsciption: Subscription
  param: string;

  constructor(private route: ActivatedRoute) {
    this.subsciption = this.route.queryParams.subscribe(
      queryParam => this.param = queryParam['analytics']
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

}
