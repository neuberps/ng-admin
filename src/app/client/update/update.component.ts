import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientComponent } from '../client/client.component';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  client: ClientComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) { }

  ngOnInit() {
    this.client = new ClientComponent();
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
        this.client = new ClientComponent();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateClient();
  }

  gotoList() {
    this.router.navigate(['/clients']);
  }
}

