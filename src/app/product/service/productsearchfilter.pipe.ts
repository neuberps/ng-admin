import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';


@Pipe({
  name: 'productsearchfilter'
})
export class ProductSearchfilterPipe implements PipeTransform {

  transform(products: Product[], searchValue:string): Product[] {

    if(!products || ! searchValue) {
      return products;
    } else {
      return products.filter(product => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}
