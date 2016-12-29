import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { shoppingListRouting } from './shopping-list.routing';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
    imports: [SharedModule, FormsModule, shoppingListRouting],
    exports: [],
    declarations: [ShoppingListComponent, ShoppingListAddComponent],
    providers: [],
})
export class ShoppingListModule { }
