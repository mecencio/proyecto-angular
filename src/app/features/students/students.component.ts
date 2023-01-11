import { Student } from './../../core/models/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './dialog/student-dialog.component';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: []
})
export class StudentsComponent implements OnInit, OnDestroy {

  public students : Student[] = [];
  private studentSubscription : Subscription;
  private addStudentSubscription : Subscription;
  private editStudentSubscription : Subscription;
  private dialogSubscriptionAddStudent : Subscription;
  private dialogSubscriptionEditStudent : Subscription;

  displayedColumns = ['id', 'name', 'isActive', 'edit', 'delete'];

  constructor(
    private readonly dialogService: MatDialog,
    private studentService: StudentService,
    ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  ngOnDestroy(): void {
    if (this.studentSubscription != null) {
      this.studentSubscription.unsubscribe();
    }
    if (this.dialogSubscriptionAddStudent != null) {
      this.dialogSubscriptionAddStudent.unsubscribe();
    }
    if (this.addStudentSubscription != null) {
      this.addStudentSubscription.unsubscribe();
    }
    if (this.editStudentSubscription != null) {
      this.editStudentSubscription.unsubscribe();
    }
    if (this.dialogSubscriptionEditStudent != null) {
      this.dialogSubscriptionEditStudent.unsubscribe();
    }
  }

  public getStudent() {
    this.studentSubscription = this.studentService.getStudents().subscribe((student) => {
      this.students.push(student)
    });
  }

  public addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      width: '50vw',
      data: {titleDialog: 'Agregar estudiante'}
    })

    this.dialogSubscriptionAddStudent = dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length-1]?.id;
        const newStudent : Student = new Student({
          id:lastId+1, 
          firstName: value.firstName,
          lastName: value.lastName,
          address: value.address,
          city: value.city,
          province: value.province,
          country: value.country,
          gender: value.gender,
          email: value.email,
          user: value.user,
          password: value.password,
          phone: value.phone,
          isActive: value.isActive,
          age: value.age
        });
        this.students = [];
        this.addStudentSubscription = this.studentService.addStudent(newStudent).subscribe((student) => {
          this.students.push(student)
        });
      }
    })
  }

  removeStudent(student : Student) {
    this.students = this.students.filter(stu => stu.id != student.id);
  }

  editStudent(student : Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      width: '50vw',
      data: {studentValue: student, titleDialog: 'Editar estudiante'}
    })

    this.dialogSubscriptionEditStudent = dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length-1]?.id;
        const newStudent : Student = new Student({
          id: student.id, 
          firstName: value.firstName,
          lastName: value.lastName,
          address: value.address,
          city: value.city,
          province: value.province,
          country: value.country,
          gender: value.gender,
          email: value.email,
          user: value.user,
          password: value.password,
          phone: value.phone,
          isActive: value.isActive,
          age: value.age
        });
        this.students = [];
        this.editStudentSubscription = this.studentService.editStudent(student.id, newStudent).subscribe((student) =>{
          this.students.push(student)
        });
      }
    })
  }

}
