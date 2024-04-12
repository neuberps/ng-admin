import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientModule } from './client/model/client.module';
import { ClientService } from './client/service/client.service';
import { CategoryService } from './category/service/category.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryModule } from './category/model/category.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientModule,
    NgxPaginationModule,
    CategoryModule
  ],
  providers: [
    ClientService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
