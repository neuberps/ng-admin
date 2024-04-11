import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormRoutingModule } from './order-routing.module';
import { OrderSearchfilterPipe } from './service/ordersearchfilter.pipe';

@NgModule({
  declarations: [OrderFormComponent, OrderListComponent, OrderSearchfilterPipe],
  imports: [
    CommonModule,
    OrderFormRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],

  exports: [OrderFormComponent, OrderListComponent],
})
export class OrderModule {}
