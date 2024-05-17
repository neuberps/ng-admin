import { Pipe, PipeTransform } from '@angular/core';
import { Category } from './category/category';
import { Client } from './client/model/client';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(clients: Client[], searchValue:string): Client[] {

    if(!clients || ! searchValue) {
      return clients;
    } else {
      return clients.filter(client => client.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }

  transformCategory(categories: Category[], searchValue:string) {
    if(!categories || ! searchValue) {
      return categories;
    } else {
      return categories.filter(category => category.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}

