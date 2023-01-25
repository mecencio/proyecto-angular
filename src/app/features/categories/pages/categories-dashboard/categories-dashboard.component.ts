import { ConfirmDialogComponent } from './../../../../shared/components/dialogs/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { CategoriesDialogComponent } from './../../dialogs/categories-dialog/categories-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from '../../services/categories.service';
import { idToken } from '@angular/fire/auth';

@Component({
  selector: 'app-categories-dashboard',
  templateUrl: './categories-dashboard.component.html',
  styleUrls: []
})
export class CategoriesDashboardComponent implements OnInit, OnDestroy {
  public categories : Category[] = [];
  private categorySubscription : Subscription;
  private addCategorySubscription : Subscription;
  private editCategorySubscription : Subscription;
  private deleteCategorySubscription : Subscription;

  displayedColumns = ['id', 'title', 'detail', 'edit', 'delete'];

  constructor(
    public readonly categoryDialogService : MatDialog,
    private confirmDialogService : MatDialog,
    private categoriesService : CategoriesService
  ) {}

    ngOnInit(): void {
      this.getCategories();
    }

    ngOnDestroy(): void {
      if (this.categorySubscription != null) {
        this.categorySubscription.unsubscribe();
      }
      if (this.addCategorySubscription != null) {
        this.addCategorySubscription.unsubscribe();
      }
      if (this.editCategorySubscription != null) {
        this.editCategorySubscription.unsubscribe();
      }
      if (this.deleteCategorySubscription != null) {
        this.deleteCategorySubscription.unsubscribe();
      }
    }

    public getCategories() {
      this.categorySubscription = this.categoriesService.getCategories().subscribe((category) => {
        this.categories = category;
      })
    }

    public addCategory() {
      const dialog = this.categoryDialogService.open(CategoriesDialogComponent, {
        width: '50vw',
        data: {titleDialog: 'Crear categoría'}
      })

      this.addCategorySubscription = dialog.afterClosed().subscribe((value) => {
        if (value) {
          const newCategory : Category = new Category ({...value, courses: []});
          this.categoriesService.addCategories(newCategory).then(() => {
            this.categories = [];
            this.getCategories();
          })
        }
      })
    }

    public editCategory(category : Category) {
      const dialog = this.categoryDialogService.open(CategoriesDialogComponent, {
        width: '50vw',
        data: {categoryValue: category, titleDialog: 'Modificar Categoría'}
      })

      this.editCategorySubscription = dialog.afterClosed().subscribe((value) => {
        if(value) {
          const newCategory : Category = new Category({id: category.id, ...value, courses: category.courses});
          this.categoriesService.editCategories(newCategory).then(() => {
            this.categories = [];
            this.getCategories();
          })
        }
      })
    }

    public removeCategory (category: Category) {
      const dialog = this.confirmDialogService.open(ConfirmDialogComponent);

      this.deleteCategorySubscription = dialog.afterClosed().subscribe((value) => {
        value && this.categoriesService.removeCategories(category.id).then(() => {
          this.categories = [];
          this.getCategories();
        })
      })
    }
}
