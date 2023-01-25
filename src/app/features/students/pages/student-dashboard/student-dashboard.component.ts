import { ConfirmDialogComponent } from './../../../../shared/components/dialogs/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { StudentDialogComponent } from '../../dialogs/student-dialog/student-dialog.component';
import { Student } from './../../../../core/models/student.model';
import { StudentService } from './../../service/student.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: []
})
export class StudentDashboardComponent implements OnInit, OnDestroy {
  public students : Student[] = [];
  private studentSubscription : Subscription;
  private dialogSubscriptionAddStudent : Subscription;
  private dialogSubscriptionEditStudent : Subscription;
  private deleteSubscription : Subscription;

  displayedColumns = ['name', 'isActive','detail', 'edit', 'delete'];

  constructor(
    public readonly studentDialogService: MatDialog,
    private confirmDialogService : MatDialog,
    private studentService: StudentService,
    ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  ngOnDestroy(): void {
    if (this.studentSubscription != null) {
      this.studentSubscription.unsubscribe();
    }
    if (this.dialogSubscriptionAddStudent != null) {
      this.dialogSubscriptionAddStudent.unsubscribe();
    }
    if (this.dialogSubscriptionEditStudent != null) {
      this.dialogSubscriptionEditStudent.unsubscribe();
    }
    if (this.deleteSubscription != null) {
      this.deleteSubscription.unsubscribe();
    }
  }

  public getStudents() {
    this.studentSubscription = this.studentService.getStudents().subscribe((student) => {
      this.students = student;
    });
  }

  public addStudent() {
    const dialog = this.studentDialogService.open(StudentDialogComponent, {
      width: '50vw',
      data: {titleDialog: 'Agregar estudiante'}
    })

    this.dialogSubscriptionAddStudent = dialog.afterClosed().subscribe((value) => {
      if (value) {
        const newStudent : Student = new Student({...value, courses: []});
        this.studentService.addStudent(newStudent).then(() => {
          this.students = [];
          this.getStudents();
        })
      }
    })
  }

  removeStudent(student : Student) {
    const dialog = this.confirmDialogService.open(ConfirmDialogComponent);
    this.deleteSubscription = dialog.afterClosed().subscribe((data) => {
      data && this.studentService.removeStudent(student.id).then(() => {
        this.students = [];
        this.getStudents();
      });
    })
  }

  editStudent(student : Student) {
    const dialog = this.studentDialogService.open(StudentDialogComponent, {
      width: '50vw',
      data: {studentValue: student, titleDialog: 'Editar estudiante'}
    })

    this.dialogSubscriptionEditStudent = dialog.afterClosed().subscribe((value) => {
      if (value) {
        const newStudent : Student = new Student({id: student.id, ...value, courses: student.courses});
        this.studentService.editStudent(newStudent).then(() => {
          this.students = [];
          this.getStudents();
        })
      }
    })
  }
}
