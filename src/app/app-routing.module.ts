import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceFormComponent } from './crud-service/service-form/service-form.component';
import { ServiceListComponent } from './crud-service/service-list/service-list.component';
import { ClientRoutingModule } from './client/client-routing.module';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { ClientListComponent } from './client/client-list/client-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'service-form',
    component: ServiceFormComponent
  },
  {
    path: 'service-form/:id',
    component: ServiceFormComponent
  },
  {
    path: 'service-list',
    component: ServiceListComponent
  },
  {
    path: 'client-form', component: ClientFormComponent
  },
  {
    path: 'client-form/:id', component: ClientFormComponent
  },
  {
    path: 'client-list', component: ClientListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
