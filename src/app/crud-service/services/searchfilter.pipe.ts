import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(services: Service[], searchValue: string): Service[] {
    if (!services || ! searchValue){
      return services;
    } else {
      return services.filter(service => service.serviceName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }

}
