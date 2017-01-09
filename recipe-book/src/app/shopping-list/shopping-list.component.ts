import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient'

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  selectedItem: Ingredient = null;
  items: Ingredient[] = [];

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItem();
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }

}
