import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: ClientComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = new ClientComponent();
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).subscribe(data => {
      console.log(data)
      this.client = data;
    },
    error => console.log(error));
  }

  list(){
    this.router.navigate(['clients'])
  }

}
