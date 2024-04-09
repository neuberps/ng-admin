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
import { UserModule } from './user/model/user.module';
import { FormComponent } from './user/form/form.component';
import { ListComponent } from './user/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientModule,
    UserModule,
    NgxPaginationModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
