import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li><a>Sign Up</a></li>
            <li><a>Sign In</a></li>
            <li><a>Protected</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a>Logout</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
