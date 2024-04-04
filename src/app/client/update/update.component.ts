import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { Client } from '../model/client';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  client: Client;

  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClientService) { }

  ngOnInit() {
    this.client = new Client();

    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
 }

 updateClient() {
  this.clientService.updateClient(this.id, this.client)
    .subscribe(data => {
      console.log(data);
      this.client = new Client();
      this.gotoList();
    }, error => console.log(error));
    alert("Deseja atualizar Cliente?");
}

 onSubmit() {
  this.updateClient();
}

 gotoList() {
  this.router.navigate(['/clients']);
}

list() {
  this.router.navigate(['clients']);
}

}
