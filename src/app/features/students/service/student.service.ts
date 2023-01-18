import { Student } from '../../../core/models/student.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private listStudents : Student[] = [
    {id: 1, firstName: "Nicolas", lastName: "Temprano", address: "Calle falsa 1234", city: "Santa Fe", province: "Sante Fe", country: "Argentina", gender: "M", email: "ntemprano@mail.com", user: "ntemprano", password: "123123", phone: "1112341234", isActive: true, age: 27},
    {id: 2, firstName: "Matias", lastName: "Rodriguez", address: "Av. siempreviva 404", city: "Cordoba", province: "Cordoba", country: "Argentina", gender: "M", email: "mrodriguez@mail.com", user: "mrodriguez", password: "123123", phone: "1112341234", isActive: false, age: 27},
    {id: 3, firstName: "Melissa", lastName: "Fermani", address: "Av. Constitución 3200", city: "CABA", province: "CABA", country: "Argentina", gender: "F", email: "mfermani@mail.com", user: "mfermani", password: "123123", phone: "1123452345", isActive: true, age: 27},
  ];
  private listStudents$ : Observable<Student> = from(this.listStudents);

  constructor() { }

  public getStudents(): Observable<Student>{
    return this.listStudents$;
  }

  public addStudent(student : Student) : Observable<Student> {
    this.listStudents.push(student)
    return this.listStudents$;
  }

  public editStudent(id: number, student: Student) : Observable<Student> {
    const index : number = this.listStudents.findIndex(student => student.id === id);
    this.listStudents = this.listStudents.splice(index, 1, student);
    return this.listStudents$;
  }
}
