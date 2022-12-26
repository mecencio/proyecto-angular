import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url : string = 'https://63a8ec87f4962215b58a3299.mockapi.io/categories';

  constructor(private http : HttpClient) { }

  public getCategories(): Observable<any>{
    return this.http.get(this.url);
  }
}
