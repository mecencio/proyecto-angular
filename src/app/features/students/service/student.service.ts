import { Student } from '../../../core/models/student.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';
import { collection, where, query } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private listStudents : Student[];
  private listStudents$ : Observable<Student>;

  constructor(private firestore: Firestore) { }

  public getStudent(id : string): Observable<any> {
    const studentsCollection = collection(this.firestore, 'students');
    const q = query(studentsCollection, where('__name__', '==', id))
    return collectionData(q, {idField: 'id'}) as Observable<any>;
  }

  public getStudents(): Observable<any> {
    const studentsCollection = collection(this.firestore, 'students');
    return collectionData(studentsCollection, {idField: 'id'}) as Observable<any>
  }

  public addStudent(student : Student) : Observable<Student> {
    this.listStudents.push(student)
    return this.listStudents$;
    const userCollection = collection(this.firestore, 'students');
    addDoc(userCollection, {...student});
  }

  public editStudent(id: number, student: Student) : Observable<Student> {
    const index : number = this.listStudents.findIndex(student => student.id === id);
    this.listStudents = this.listStudents.splice(index, 1, student);
    return this.listStudents$;
  }
}
