import { FormComponent } from './client/form/form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './client/list/list.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { UpdateComponent } from './client/update/update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },{
    path: 'clients',
    component: ListComponent
  },{
    path: 'add',
    component: FormComponent
  },{
    path: 'update/:id',
    component: UpdateComponent
  },{
    path: 'details/:id',
    component: ClientDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
