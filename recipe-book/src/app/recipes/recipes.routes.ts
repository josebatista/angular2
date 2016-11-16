import { Routes } from '@angular/router';

import { RecipesStartComponent } from './recipes-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

export const RECIPE_ROUTES: Routes = [
  { path: '', component: RecipesStartComponent },
  { path: 'new', component: RecipeEditComponent },
  { path: ':id', component: RecipeDetailComponent },
  { path: ':id/edit', component: RecipeEditComponent }
];
