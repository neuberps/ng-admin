import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './client/form/form.component';
import { ListComponent } from './client/list/list.component';
import { ClientComponent } from './client/client/client.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { UpdateComponent } from './client/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ClientComponent,
    ClientDetailsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
