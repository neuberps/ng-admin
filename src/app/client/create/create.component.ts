import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  client: ClientComponent = new ClientComponent();
  submitted= false;

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newClient(): void{
    this.submitted = false;
    this.client = new ClientComponent();
  }

  save(){
    this.clientService.createClient(this.client).subscribe(data => {
      console.log(data)
      this.client = new ClientComponent();
      this.gotoList();
    },
    error => console.log(error)
    )
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/clients'])
  }

}
