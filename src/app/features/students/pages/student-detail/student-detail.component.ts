import { ConfirmDialogComponent } from './../../../../shared/components/dialogs/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { ClassesDialogComponent } from './../../dialogs/classes-dialog/classes-dialog.component';
import { Class } from 'src/app/core/models/class.model';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from './../../service/student.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: []
})
export class StudentDetailComponent implements OnInit, OnDestroy {
  public student : Student;
  public error : boolean;
  private studentSubscription : Subscription;
  private dialogAddClassSubscription : Subscription;
  private dialogEditClassSubscription : Subscription;
  private removeClassSubscription : Subscription;

  displayedColumns = ['id', 'title', 'state', 'days', 'edit', 'delete'];

  constructor(
    private _route: ActivatedRoute,
    public readonly classesDialogService : MatDialog,
    public readonly confirmDialogService : MatDialog,
    private studentService : StudentService,
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentSubscription = this.studentService.getStudent((this._route.snapshot.paramMap.get('id') || "")).subscribe({
      next: (res) => {
        this.student = new Student({...res});
        this.error = false;
      },
      error: () => {
        this.error = true;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.studentSubscription != null) {
      this.studentSubscription.unsubscribe();
    }
    if (this.dialogAddClassSubscription != null) {
      this.dialogAddClassSubscription.unsubscribe();
    }
    if (this.dialogEditClassSubscription != null) {
      this.dialogEditClassSubscription.unsubscribe();
    }
    if (this.removeClassSubscription != null) {
      this.removeClassSubscription.unsubscribe();
    }
  }

  public addClass() {
    const dialog = this.classesDialogService.open(ClassesDialogComponent, {
      width: '50vw',
      data: {titleDialog: 'Agregar nueva comisión'}
    })

    this.dialogAddClassSubscription = dialog.afterClosed().subscribe((value) => {
      if (value && (this.student.courses.filter(course => course.id == value.id).length == 0)) {
        const newClass : Class = new Class ({...value});
        this.student.courses.push(newClass);
        this.studentService.editStudent(this.student).then (() => this.getStudent());
      }
    })
  }

  public editClass(oldClass : Class) {
    const dialog = this.classesDialogService.open(ClassesDialogComponent, {
      width: '50vw',
      data: {
        classesValue: oldClass,
        titleDialog: 'Editar comisión',
      }
    })

    this.dialogEditClassSubscription = dialog.afterClosed().subscribe((value) => {
      if (value && ((value.id == oldClass.id) || (this.student.courses.filter(course => course.id == value.id).length == 0))) {
        const index = this.student.courses.findIndex(course => course.id == oldClass.id);
        this.student.courses.splice(index, 1, new Class({...value}));
        this.studentService.editStudent(this.student).then (() => this.getStudent());
      }
    })
  }

  public removeClass(oldClass : Class) {
    const dialog = this.confirmDialogService.open(ConfirmDialogComponent);

    this.removeClassSubscription = dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.student.courses = this.student.courses.filter(course => course.id != oldClass.id);
        this.studentService.editStudent(this.student).then (() => this.getStudent());
      }
    })
  }
}
