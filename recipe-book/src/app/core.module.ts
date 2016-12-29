import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
    imports: [],
    exports: [DropdownDirective],
    declarations: [HomeComponent, DropdownDirective],
    providers: [],
})
export class CoreModule { }
