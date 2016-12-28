import { Component, OnInit } from '@angular/core';

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
            <li><a>Logout</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

}
