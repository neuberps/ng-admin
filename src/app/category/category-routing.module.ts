import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoryComponent } from './list-category/list-category.component';

const routes: Routes = [
  { path: 'listCategory', component: ListCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryRoutingModule{}
