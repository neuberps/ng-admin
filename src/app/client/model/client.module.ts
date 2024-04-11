import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from '../client-routing.module';
import { ClientFormComponent } from '../client-form/client-form.component';
import { FormsModule } from '@angular/forms';
import { ClientListComponent } from '../client-list/client-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchfilterPipe } from 'src/app/client/service/searchfilter.pipe';



@NgModule({
  declarations: [
    ClientFormComponent,
    ClientListComponent,
    SearchfilterPipe
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    ClientFormComponent,
    ClientListComponent
  ]
})
export class ClientModule { }
