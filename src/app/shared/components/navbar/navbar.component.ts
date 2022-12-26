import { Component, Inject, inject, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { NavbarDialogComponent } from '../navbar-dialog/navbar-dialog.component';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  public categories : Category[];

  panelOpenState = false;

  constructor(
    private readonly dialogService: MatDialog,
    private service: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  addCategory() {
    const dialog = this.dialogService.open(NavbarDialogComponent, {
      data: {titleDialog: 'Agregar categoría'}
    })

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.categories[this.categories.length-1]?.id;
        this.categories = [...this.categories, new Category(lastId+1, value.title,[])];
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

    dialog.afterClosed().subscribe((data) => {
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
    

    dialog.afterClosed().subscribe((value) => {
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

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        cat.courses.splice(index,1,data.title);
        cat.courses = [...cat.courses];
      }
    })
  }
}
