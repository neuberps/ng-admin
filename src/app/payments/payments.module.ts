import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsFormComponent } from './payments-form/payments-form.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaymentsSearchfilterPipe} from './service/searchfilter.pipe';
import { PaymentRoutingModule } from './payment-routing.module';



@NgModule({
  declarations: [
    PaymentsFormComponent,
    PaymentsListComponent,
    PaymentsSearchfilterPipe


  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    NgxPaginationModule,
    PaymentRoutingModule

  ],
  exports: [
    PaymentsFormComponent,
    PaymentsListComponent
  ]
})
export class PaymentsModule { }
