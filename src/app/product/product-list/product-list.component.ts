import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  totalLength: any;
  page: number = 1;

  searchValue: any;
  searchBy: string;

  products: Product[] = [];
  selectedProduct: Product;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: ProductService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe( response => this.products = response);
  }

  createProduct() {
    this.router.navigate(['product-form'])
  }

}

