import { ClientComponent } from './../client/client.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clients: Observable<ClientComponent[]>;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.clients = this.clientService.getClientList();
  }

  deleteClients(id: number){
    this.clientService.deleteClient(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log((error)));
  }

  updateComponent(id: number){
    this.router.navigate(['update', id])
  }

  clientComponent(id: number){
    this.router.navigate(['details', id])
  }

}
