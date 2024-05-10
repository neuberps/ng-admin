import { CommonModule, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchfilterPipe } from 'src/app/client/service/searchfilter.pipe';

import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientRoutingModule } from './client-routing.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [ClientFormComponent, ClientListComponent, SearchfilterPipe],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],

  exports: [ClientFormComponent, ClientListComponent],

  providers: [ { provide: LOCALE_ID, useValue: 'pt' },
  ],
})
export class ClientModule {}
