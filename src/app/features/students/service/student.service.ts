import { Student } from '../../../core/models/student.model';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface IStudentService {
  getStudents : void;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private APIurl : string = 'https://63a8ec87f4962215b58a3299.mockapi.io/students';

  constructor(private http : HttpClient) { }

  public getStudent(id : string): Observable<any> {
    return this.http.get(this.APIurl + '/' + id);
  }

  public getStudents(): Observable<any> {
    return this.http.get(this.APIurl);
  }

  async addStudent(student : Student) : Promise<any> {
    const response = await lastValueFrom(this.http.post(this.APIurl, student));
    return response;
  }

  async editStudent(student: Student) : Promise<any> {
    const response = await lastValueFrom(this.http.put(this.APIurl+'/'+ student.id, student));
    return response;
  }

  async removeStudent(id : number) : Promise<any> {
    const response = await lastValueFrom(this.http.delete(this.APIurl+'/'+id));
    return response;
  }
}
