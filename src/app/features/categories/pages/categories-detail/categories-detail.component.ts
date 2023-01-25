import { ConfirmDialogComponent } from './../../../../shared/components/dialogs/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { CoursesDialogComponent } from './../../dialogs/courses-dialog/courses-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/core/models/course.model';
import { CategoriesService } from '../../services/categories.service';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: []
})
export class CategoriesDetailComponent implements OnInit, OnDestroy {
  public category : Category;
  public error : boolean;
  private categorySubscription : Subscription;
  private addCourseSubscription : Subscription;
  private editCourseSubscription : Subscription;
  private removeCourseSubscription : Subscription;

  displayedColumns = ['id', 'title', 'edit', 'delete'];

  constructor (
    private _route : ActivatedRoute,
    public readonly coursesDialogService : MatDialog,
    public readonly confirmDialogService : MatDialog,
    private categoryService : CategoriesService,
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categorySubscription = this.categoryService.getCategory(this._route.snapshot.paramMap.get('id') || '').subscribe({
      next: (res) => {
        this.category = new Category ({...res})
        this.error = false;
      },
      error: () => {
        this.error = true;
      }
    })
  }

  ngOnDestroy(): void {
    if (this.categorySubscription != null) {
      this.categorySubscription.unsubscribe();
    }
    if (this.addCourseSubscription != null) {
      this.addCourseSubscription.unsubscribe();
    }
    if (this.editCourseSubscription != null) {
      this.editCourseSubscription.unsubscribe();
    }
    if (this.removeCourseSubscription != null) {
      this.removeCourseSubscription.unsubscribe();
    }
  }

  public addCourse() {
    const dialog = this.coursesDialogService.open(CoursesDialogComponent, {
      width: '50vw',
      data: {titleDialog: 'Nuevo curso'}
    })

    this.addCourseSubscription = dialog.afterClosed().subscribe((value) => {
      if (value && (this.category.courses.filter(course => course.id == value.id).length == 0)) {
        const newCourse : Course = new Course ({...value});
        this.category.courses.push(newCourse);
        this.categoryService.editCategories(this.category).then(() => this.getCategory());
      }
    })
  }

  public editCourse(oldCourse : Course) {
    const dialog = this.coursesDialogService.open(CoursesDialogComponent, {
      width: '50vw',
      data: {courseValue: oldCourse, titleDialog: 'Editar Curso'}
    })

    this.editCourseSubscription = dialog.afterClosed().subscribe((value) => {
      if (value && ((value.id == oldCourse.id) || (this.category.courses.filter(course => course.id == value.id).length == 0))) {
        const index = this.category.courses.findIndex(course => course.id == oldCourse.id);
        this.category.courses.splice(index, 1, new Course ({...value}));
        this.categoryService.editCategories(this.category).then(() => this.getCategory());
      }
    })
  }

  public removeCourse(oldCourse : Course) {
    const dialog = this.confirmDialogService.open(ConfirmDialogComponent);

    this.removeCourseSubscription = dialog.afterClosed().subscribe((value) => {
      if (value) {
        this.category.courses = this.category.courses.filter(course => course.id != oldCourse.id);
        this.categoryService.editCategories(this.category).then(() => this.getCategory());
      }
    })
  }
}
