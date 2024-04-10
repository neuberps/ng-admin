import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Service } from '../model/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  totalLength: any;
  page:number = 1;
  searchValue: any;
  services: Service[] = [];
  selectedService: Service;
  successMessage: string;
  errorMessage: string;

  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceService.findAll().subscribe(response => this.services = response);
  }

  createService(){
    this.router.navigate(['/form'])
  }

  confirmDeletion(service: Service){
    this.selectedService = service;
  }

  deleteService(){
    this.serviceService.delete(this.selectedService).subscribe(response => {
      this.successMessage = 'Serviço excluído com sucesso!';
      window.location.reload();
    },
    error => {
      console.error("Erro ao excluir serviço", error);
      this.errorMessage = "Erro ao ecluir serviço: " + error.message;
    }
  );
  }

}
