import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  id: number;
  name: string;
  email: string;
  cel: string;
  cpf: string;
  registryUser: string;

  constructor() { }

  ngOnInit(): void {
  }

}
