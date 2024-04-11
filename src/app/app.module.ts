import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';;
import { ServiceFormComponent } from './crud-service/service-form/service-form.component';
import { ServiceListComponent } from './crud-service/service-list/service-list.component';
import { ServiceService } from './crud-service/services/service.service';
import { ServicessearchfilterPipe } from './crud-service/services/servicessearchfilter.pipe';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientService } from './client/service/client.service';
import { SearchfilterPipe } from './client/service/searchfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ServiceFormComponent,
    ServiceListComponent,
    ServicessearchfilterPipe,
    ClientFormComponent,
    ClientListComponent,
    SearchfilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ServiceService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
