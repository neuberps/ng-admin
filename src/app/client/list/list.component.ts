import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from 'src/app/client/service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clients: Client[] = [];
  selectedClient: Client;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: ClientService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe( response => this.clients = response);
  }

  createClient() {
    this.router.navigate(['/form'])
  }

  confirmDeletion(client : Client) {
    this.selectedClient = client;
  }

  deleteClient() {    
    this.service.deleteId(this.selectedClient)
      .subscribe( 
          response => {
            this.successMessage = 'Cliente excluído com sucesso!';
            // Recarregar a página
            window.location.reload();
          },
          error => {
            console.error('Erro ao excluir cliente:', error);
            this.errorMessage = 'Erro ao excluir cliente: ' + error.message;
          }
      );
}
}
