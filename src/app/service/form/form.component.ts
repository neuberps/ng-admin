import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";

import { Service } from '../model/service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  service: Service;
  success: boolean = false;
  errors: string[];
  id: string;

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.service = new Service();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams["id"];
      if(this.id){
        this.serviceService.findById(this.id).subscribe(
          (response) => (this.service = response),
          (errorResponse) => (this.service = new Service())
        );
      }
    });
  }

  returnList(){
    this.router.navigate(["/list"]);
  }

  onSubmit(){
    if(this.id){
      this.serviceService.update(this.service).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ["Erro ao atualizar o serviço!"];
        }
      );
    } else {
      this.serviceService.create(this.service).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.service = response;
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
