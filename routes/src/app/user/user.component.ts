import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user-component',
  template: `
    <h1>User Component</h1>
    <button (click)="onNavigate()" >Go Home</button>
    <hr />
    {{id}}
    <hr />
    <router-outlet></router-outlet>
  `
})
export class UserComponent implements OnDestroy {

  id: string;
  private subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNavigate() {
    // this.router.navigate(['/'], {queryParams: {'analytics': 100}, fragment: 'section1'}); //fragment
    //this.router.navigate(['/'], {queryParams: {'analytics': 100}, preserveQueryParams: true}); //preserveQueryParams
    this.router.navigate(['/'], {queryParams: {'analytics': 100}});
  }

}
