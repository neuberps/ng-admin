import { Component, OnInit } from "@angular/core";
import { Client } from "../client";
import { ClientService } from "../../client.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  client: Client;
  success: boolean = false;
  errors: string[];
  id: string;

  constructor(
    private service: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.client = new Client();
  }

  ngOnInit(): void {
    // let Params = this.activatedRoute.params
    // // console.log(Params.value);
    // if(Params.value.id) {
    //   this.id = Params.value.id;
    //   this.service
    //       .getById(this.id)
    //       .subscribe( response = > this.client = response)
    // }    


    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams["id"];
      if (this.id) {
        this.service.getById(this.id).subscribe(
          (response) => (this.client = response),
          (errorResponse) => (this.client = new Client())
        );
      }
    });
  }

  returnList() {
    this.router.navigate(["/list"]);
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.client).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ["Erro ao Atualizar Cliente"];
        }
      );
    } else {
      this.service.save(this.client).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.client = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error;
          console.log(errorResponse.error);
        }
      );
    }
  }
}
