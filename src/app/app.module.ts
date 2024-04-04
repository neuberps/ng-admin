import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './client/form/form.component';
import { ListComponent } from './client/list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ClientDetailsComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
