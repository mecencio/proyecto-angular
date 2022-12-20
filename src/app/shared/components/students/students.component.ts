import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../models/student.model';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: []
})
export class StudentsComponent implements OnInit {

  public students : Student[] = [
    new Student (1, 'Juan', 'Perez', 'jperez', 'jperez@mail.com', true),
    new Student (2, 'Marta', 'Sanchez', 'msanchez', 'msanchez@mail.com', false),
    new Student (3, 'Carlos', 'Lopez', 'clopez', 'clopez@mail.com', true),
  ]

  displayedColumns = ['id', 'name', 'isActive', 'edit', 'delete'];

  constructor(private readonly dialogService: MatDialog) { }

  ngOnInit(): void {}

  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      width: '50vw',
      data: {titleDialog: 'Agregar estudiante'}
    })

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length-1]?.id;
        this.students = [...this.students, new Student(lastId+1, value.firstName, value.lastName, value.user, value.mail, value.isActive?true:false)];
      }
    })
  }

  removeStudent(student : Student) {
    this.students = this.students.filter(st => st != student);
  }

  editStudent(student : Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      width: '50vw',
      data: {studentValue: student, titleDialog: 'Agregar estudiante'}
    })

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        this.students = this.students.map((stu) => stu.id === student.id? {...stu, ...value} : stu);
      }
    })
  }

}
