import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { ProductSearchfilterPipe } from './service/productsearchfilter.pipe';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductSearchfilterPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    NgxPaginationModule,

  ],
  exports: [
    ProductFormComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
