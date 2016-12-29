import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['signup']">Sign Up</a></li>
            <li><a [routerLink]="['signin']">Sign In</a></li>
            <li><a [routerLink]="['protected']">Protected</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
            <li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private subscription: Subscription;

  constructor(private authService: AuthService) {
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isAuth() {
    return this.isAuthenticated;
  }

  onLogout() {
    this.authService.logout();
  }

}
