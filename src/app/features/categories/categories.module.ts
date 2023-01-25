import { CategoriesDialogComponent } from './dialogs/categories-dialog/categories-dialog.component';
import { CategoriesDashboardComponent } from './pages/categories-dashboard/categories-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesRoutingModule } from './categories-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesDetailComponent } from './pages/categories-detail/categories-detail.component';
import { CoursesDialogComponent } from './dialogs/courses-dialog/courses-dialog.component';



@NgModule({
  declarations: [
    CategoriesDashboardComponent,
    CategoriesDialogComponent,
    CategoriesComponent,
    CategoriesDetailComponent,
    CoursesDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CategoriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
