import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceService } from './service/service/service.service';
import { ClientService } from './client/service/client.service';
import { ServiceModule } from './service/service.module';
import { TemplateModule } from './template/template.module';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ClientModule } from './client/client.module';
import { ProductService } from './product/service/product.service';
import { ProductModule } from './product/product.module';


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
    ServiceModule,
    NgxPaginationModule,
    ProductModule
  ],



  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ServiceService,
    ClientService,
    ProductService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
