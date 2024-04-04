import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './client/form/form.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { ListComponent } from './client/list/list.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';


const routes: Routes = [

  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'clients', component: ListComponent },
  { path: 'add', component: FormComponent },
  { path: 'update/:id', component: UpdateClientComponent },
  { path: 'details/:id', component: ClientDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
