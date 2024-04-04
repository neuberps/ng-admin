import { Router } from '@angular/router';
import { ClientService } from './../service/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  client: Client = new Client();
  submitted = false;

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
    }


  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }

  save() {
    this.clientService
    .createClient(this.client).subscribe(data => {
      console.log(data)
      this.client = new Client();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/clients']);
  }
}


