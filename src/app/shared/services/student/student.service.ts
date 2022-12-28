import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, count, lastValueFrom, Observable } from 'rxjs';
import { Student } from '../../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url : string = 'https://63a8ec87f4962215b58a3299.mockapi.io/students';
  public online : number;
  public offline : number;

  constructor(private http : HttpClient) { }

  public getStudents(): Observable<any>{
    const result = this.http.get(this.url);
    return result;
  }

  async addStudent(student : Student) : Promise<any> {
    const response = await lastValueFrom(this.http.post(this.url, student));
    return response;
  }

  async removeStudent(id : number) : Promise<any> {
    const response = await lastValueFrom(this.http.delete(this.url+'/'+id));
    return response;
  }

  async editStudent(id: number, student: Student) {
    const response = await lastValueFrom(this.http.put(this.url+'/'+id, student));
    return response;
  }
}
