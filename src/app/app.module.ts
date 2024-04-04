import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './client/form/form.component';
import { ListComponent } from './client/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './client/update/update.component';
import { DetailsComponent } from './client/details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    UpdateComponent,
    DetailsComponent
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
