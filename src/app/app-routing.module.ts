import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './client/list/list.component';
import { FormComponent } from './client/form/form.component';
import { UpdateComponent } from './client/update/update.component';
import { DetailsComponent } from './client/details/details.component';


const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'clients', component: ListComponent },
  { path: 'add', component: FormComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'details/:id', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
