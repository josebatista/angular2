import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }   	from '@angular/forms';
import { HttpModule} 		from '@angular/http';

//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }	from 'angular2-in-memory-web-api';
import { InMemoryDataService }	from './in-memory-data.service';

import './rxjs-extensions';

import { AppComponent  } 	from './app.component';
import { HeroesComponent } 	from './heroes.component';
import { DashboardComponent }	from './dashboard.component'; 
import { HeroDetailComponent } 	from './hero-detail.component';
import { HeroService } 		from './hero.service';
import { HeroSearchComponent }	from './hero-search.component';
import { routing } 		from './app.routing';

@NgModule({
  imports:      [ 
	BrowserModule,
	FormsModule,
	HttpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService), //emulate web service
	routing
  ],
  declarations: [ 
	AppComponent,
	HeroesComponent,
	DashboardComponent,
	HeroSearchComponent,
	HeroDetailComponent
  ],
  providers: [
	HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

