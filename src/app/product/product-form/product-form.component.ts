import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;
  success: boolean = false;
  errors: string[];
  id: string;

  constructor(
    private service: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.product = new Product();
  }
  ngOnInit(): void {
    // let Params = this.activatedRoute.params
    // // console.log(Params.value);
    // if(Params.value.id) {
    //   this.id = Params.value.id;
    //   this.service
    //       .getById(this.id)
    //       .subscribe( response = > this.client = response)
    // }


    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams["id"];
      if (this.id) {
        this.service.getById(this.id).subscribe(
          (response) => (this.product = response),
          (errorResponse) => (this.product = new Product())
        );
      }
    });
  }

  returnList() {
    this.router.navigate(["product-list"]);
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.product).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ["Erro ao Atualizar Produto"];
        }
      );
    } else {
      this.service.save(this.product).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.product = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error;
          console.log(errorResponse.error);
        }
      );
    }
  }
}


