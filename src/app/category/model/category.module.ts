import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from '../category-routing.module';
import { FormsModule } from '@angular/forms';
import { ListCategoryComponent } from '../list-category/list-category.component';


@NgModule({
  declarations: [
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ],
  exports: [
    ListCategoryComponent
  ]
})
export class CategoryModule { }
