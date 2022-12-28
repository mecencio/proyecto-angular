import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, filter, of, Subscription, from } from 'rxjs';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student/student.service';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: []
})
export class StudentsComponent implements OnInit, OnDestroy {

  public students : Student[];
  private suscription: Subscription;
  private subscribe: Subscription;

  displayedColumns = ['id', 'name', 'isActive', 'edit', 'delete'];

  constructor(
    private readonly dialogService: MatDialog,
    private service: StudentService,
    ) { }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
    this.subscribe.unsubscribe();
  }

  ngOnInit(): void {
    this.getStudent();
  }

  public getStudent() {
    this.suscription = this.service.getStudents().subscribe((students) => {
      this.students = students
    });
    setTimeout(() => {
      const aux = from (this.students)
      const example = aux.pipe(filter(person => person.age >= 18));
      this.students = [];
      this.subscribe = example.subscribe(val => this.students.push(val))
    }, 1500);
  }

  public addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      width: '50vw',
      data: {titleDialog: 'Agregar estudiante'}
    })

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length-1]?.id;
        const newStudent : Student = new Student(lastId+1, value.firstName, value.lastName, value.user, value.mail, value.isActive, value.age)
        this.service.addStudent(newStudent).then( () => {
          this.students = [];
          this.getStudent();
        });
      }
    })
  }

  removeStudent(student : Student) {
    const aux = this.service.removeStudent(student.id).then(() => {
      this.students = [];
      this.getStudent();
    });
  }

  editStudent(student : Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      width: '50vw',
      data: {studentValue: student, titleDialog: 'Editar estudiante'}
    })

    dialog.afterClosed().subscribe((value) => {
      this.service.editStudent(student.id, value).then(() =>{
        this.students = [];
        this.getStudent();
      });
    })
  }

}
