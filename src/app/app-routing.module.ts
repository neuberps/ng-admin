import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceFormComponent } from './crud-service/service-form/service-form.component';
import { ServiceListComponent } from './crud-service/service-list/service-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    component: ServiceFormComponent
  },
  {
    path: 'form:id',
    component: ServiceFormComponent
  },
  {
    path: 'list',
    component: ServiceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
