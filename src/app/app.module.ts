import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { ClientService } from './client/service/client.service';
import { CategoryService } from './category/service/category.service';
import { CategoryModule } from './category/model/category.module';
import { HomeComponent } from './home/home.component';
import { OrderModule } from './order/order.module';
import { TemplateModule } from './template/template.module';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientModule,
    OrderModule,
    NgxPaginationModule,
    CategoryModule
  ],
  providers: [
    ClientService,
    CategoryService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
