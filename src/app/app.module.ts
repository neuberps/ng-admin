import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { ClientModule } from './client/model/client.module';
import { ServiceRoutingModule } from './service/service-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';;
import { ServiceService } from './service/service/service.service';
import { ClientService } from './client/service/client.service';
import { ServiceModule } from './service/service.module';
import { TemplateModule } from './template/template.module';

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
    NgxPaginationModule
  ],
  
  providers: [ServiceService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
