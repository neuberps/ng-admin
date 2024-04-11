import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'

import { ClientService } from './client/service/client.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientModule } from './client/client.module';
import { PaymentsModule } from './payments/payments.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientModule,
    PaymentsModule,
    NgxPaginationModule,


  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
