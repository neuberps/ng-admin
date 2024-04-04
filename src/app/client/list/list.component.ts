import { ClientService } from './../service/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../model/client';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: Observable<Client[]>;

  constructor(private clientService: ClientService,
    private router: Router) { }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clients = this.clientService.getClientsList();
  }

  deleteClient(id: string) {
    if(confirm('Deseja realmente excluir esse cliente?')){
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          alert("Cliente excluído com sucesso!");
        },
        error => console.log(error));
   } else {
     alert("Operação cancelada!");
   }

  }


  clientDetails(id: string){
    this.router.navigate(['details', id]);
  }

  updateClient(id: string){
    this.router.navigate(['update', id]);
  }



}
