import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../model/service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  totalLength: any;
  page:number = 1;
  searchValue: any;
  services: Service[] = [];
  selectedService: Service;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(response => this.services = response);
  }

  createService(){
    this.router.navigate(['/form'])
  }

  confirmDeletion(service: Service){
    this.selectedService = service;
  }

  deleteService(){
    this.service.delete(this.selectedService).subscribe(response => {
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
