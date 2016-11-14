import { Ingredient } from '../shared/ingredient';

export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  getItem() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

}