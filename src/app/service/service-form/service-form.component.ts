import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";
import { Service } from '../model/service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  service: Service;
  success: boolean = false;
  errors: string[];
  id: string;
  services: Service[] = [];
  selectedService: Service;
  successMessage: string;
  errorMessage: string;

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
      if (this.id) {
        this.serviceService.findById(this.id).subscribe(
          (response) => (this.service = response),
          (errorResponse) => (this.service = new Service())
        );
      }
    });
  }

  returnList() {
    this.router.navigate(["/service-list"]);
  }

  onSubmit() {
    if (this.id) {
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

  confirmDeletion(service : Service) {
    this.selectedService = service;
  }

  deleteService() {
    this.serviceService.delete(this.selectedService)
      .subscribe(
          response => {
            this.successMessage = 'Serviço excluído com sucesso!';
            // Recarregar a página
            window.location.reload();
          },
          error => {
            console.error('Erro ao excluir serviço:', error);
            this.errorMessage = 'Erro ao excluir serviço: ' + error.message;
          }
      );
  }

}
