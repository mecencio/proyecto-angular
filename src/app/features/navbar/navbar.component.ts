import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CategoriesService } from '../../shared/services/categories/categories.service';
import { DialogRef } from '@angular/cdk/dialog';
import { NavbarDialogComponent } from './dialog/navbar-dialog.component';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  public categories : Category[];
  private categoriesSubscription : Subscription;
  private dialogSubscriptionAddCategory : Subscription;
  private dialogSubscriptionEditCategory : Subscription;
  private dialogSubscriptionAddCourse : Subscription;
  private dialogSubscriptionEditCourse : Subscription;

  panelOpenState = false;

  constructor(
    private readonly dialogService: MatDialog,
    private categoriesService: CategoriesService,
  ) { }

  ngOnDestroy(): void {
    if (this.categoriesSubscription != null) {
      this.categoriesSubscription.unsubscribe();
    }
    if (this.dialogSubscriptionAddCategory != null) {
      this.dialogSubscriptionAddCategory.unsubscribe();
    }
    if (this.dialogSubscriptionEditCategory != null) {
      this.dialogSubscriptionEditCategory.unsubscribe();
    }
    if (this.dialogSubscriptionAddCourse != null) {
      this.dialogSubscriptionAddCourse.unsubscribe();
    }
    if (this.dialogSubscriptionEditCourse != null) {
      this.dialogSubscriptionEditCourse.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.categoriesSubscription = this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  addCategory() {
    const dialog = this.dialogService.open(NavbarDialogComponent, {
      data: {titleDialog: 'Agregar categoría'}
    })

    this.dialogSubscriptionAddCategory = dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.categories[this.categories.length-1]?.id;
        this.categories = [...this.categories, new Category({id:lastId+1, title:value.title, courses:[]})];
      }
    })
  }

  removeCategory(cat : Category) {
    this.categories = this.categories.filter(category => category != cat);
  }

  editCategory(cat: Category) {
    const index = this.categories.findIndex(item => item === cat);
    const dialog = this.dialogService.open(NavbarDialogComponent, {
      data: {titleValue: cat.title, titleDialog: 'Editar categoría'},
    })

    this.dialogSubscriptionEditCategory = dialog.afterClosed().subscribe((data) => {
      if (data) {
        cat.title = data.title;
        this.categories = [...this.categories];
      }
    })
  }

  addCourse(cat : Category) {
    const dialog = this.dialogService.open(NavbarDialogComponent, {
      data: {titleDialog: 'Agregar curso'}
    });
    

    this.dialogSubscriptionAddCourse = dialog.afterClosed().subscribe((value) => {
      if (value) {
        cat.courses = [...cat.courses, value.title];
      }
    })
  }

  removeCourse(cat : Category, course : String) {
    cat.courses = cat.courses.filter(title => title != course);
  }

  editCourse(cat: Category, title : String) {
    const index = cat.courses.findIndex(item => item === title);
    const dialog = this.dialogService.open(NavbarDialogComponent, {
      data: {titleValue: title, titleDialog: 'Editar curso'},
    })

    this.dialogSubscriptionEditCourse = dialog.afterClosed().subscribe((data) => {
      if (data) {
        cat.courses.splice(index,1,data.title);
        cat.courses = [...cat.courses];
      }
    })
  }
}
