import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { ClientRoutingModule } from './client/client-routing.module';
import { ServiceRountingModule } from './service/service-rounting.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';;
import { ServiceService } from './service/service/service.service';
import { ClientService } from './client/service/client.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ClientRoutingModule,
    ServiceRountingModule,
    NgxPaginationModule
  ],
  providers: [ServiceService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
