import { Student } from '../../../core/models/student.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { addDoc, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { collection, where, query } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
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

  public addStudent(student : Student) : Promise<any> {
    const userCollection = collection(this.firestore, 'students');
    const {id, ...rest} = student;
    return addDoc(userCollection, {...rest});
  }

  public editStudent(student: Student) : Promise<any> {
    const studentDoc = doc(this.firestore, 'students/'+student.id);
    const {id, courses, ...rest} = student;
    return updateDoc(studentDoc, {...rest});
  }

  public removeStudent(id : number) : Promise<any> {
    const studentsDoc = doc(this.firestore, 'students/'+id);
    return deleteDoc(studentsDoc);
  }
}
