import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  totalLength: any;
  page: number = 1;

  searchValue: any;

  categories: Category[] = [];
  selectedCategory: Category;
  successMessage: string;
  errorMessage: string;

  constructor(private service: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .findAll()
    .subscribe( response => this.categories = response);
  }

  confirmDeletion(category : Category) {
    this.selectedCategory = category;
  }

  deleteCategory() {
    this.service.deleteId(this.selectedCategory)
    .subscribe(
    response => {
      this.successMessage = 'Categoria excluída com sucesso!';
       window.location.reload();
    },
      error => {
        console.error('Erro ao excluir categoria:', error);
        this.errorMessage = 'Erro ao excluir categoria: ' + error.message;
      }
    );
  }

}
