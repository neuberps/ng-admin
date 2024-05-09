import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientModule } from './client/client.module';
import { ClientService } from './client/service/client.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserModule } from './user/user.module';
import { UserService } from './user/service/user.service';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/services/login.service';



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
    UserModule,
    NgxPaginationModule,
    LoginModule

  ],
  providers: [
    ClientService,
    UserService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
