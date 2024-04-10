
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientModule } from './client/model/client.module';
import { ClientService } from './client/service/client.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/service/product.service';

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
    ProductModule,
    NgxPaginationModule,
  ],
  providers: [
    ClientService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
