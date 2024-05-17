import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  success: boolean = false;
  errors: string[];
  id: string;

  users: User[] = [];
  selectedUser: User;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    ){ this.user = new User();
       this.user.registryUser = this.loginService.getUserSession().name;
    }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams["id"];
      if (this.id) {
        this.service.getById(this.id).subscribe(
          (response) => (this.user = response),
          (errorResponse) => (this.user = new User())
        );
      }
    });
  }

  public getUserSession(): any {
    return this.loginService.getUserSession();
  }

  returnList() {
    this.router.navigate(["/user-list"]);
  }

  onSubmit() {
    if (this.id) {
          if (this.user.registryUser !== this.loginService.getUserSession().name) {
              this.user.registryUser = this.loginService.getUserSession().name;
          }

       this.service.update(this.user).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          //this.router.navigate(["/user-list"]);
        },
        (errorResponse) => {
          this.errors = ["Erro ao Atualizar Usuário"];
        }
      );
    } else {
      this.service.save(this.user).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.user = response;
          // this.router.navigate(["/user-list"]);
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error;
          console.log(errorResponse.error);
        }
      );
    }
  }

   confirmDeletion(user : User) {
    this.selectedUser= user;
  }

  deleteUser() {
    this.service.deleteId(this.selectedUser)
      .subscribe(
          response => {
            this.successMessage = 'Usuário excluído com sucesso!';
            // Recarregar a página
            window.location.reload();
          },
          error => {
            console.error('Erro ao excluir usuário:', error);
            this.errorMessage = 'Erro ao excluir usuário: ' + error.message;
          }
      );
  }
}
