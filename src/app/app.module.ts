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

import { ServiceService } from './service/service/service.service';
import { ServiceModule } from './service/service.module';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


registerLocaleData(ptBr);


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
    ServiceModule,

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ServiceService,
    ClientService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
