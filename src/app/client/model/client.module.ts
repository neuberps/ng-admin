import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from '../client-routing.module';
import { FormComponent } from '../form/form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchfilterPipe } from 'src/app/client/service/searchfilter.pipe';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    SearchfilterPipe
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    FormComponent,
    ListComponent
  ]
})
export class ClientModule { }
