import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    ListComponent
  ]
})
export class ClientModule { }
