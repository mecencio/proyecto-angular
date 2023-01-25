import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable, of } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private APIurl : string = 'https://63a8ec87f4962215b58a3299.mockapi.io/categories';

  constructor(private http : HttpClient) { }

  public getCategory(id : string) : Observable<any> {
    return this.http.get(this.APIurl + '/' + id);
  }

  public getCategories() : Observable<any> {
    return this.http.get(this.APIurl);
  }

  async addCategories(category : Category) : Promise<any> {
    const response = await lastValueFrom(this.http.post(this.APIurl, category));
    return response;
  }

  async editCategories(category : Category) : Promise<any> {
    const response = await lastValueFrom(this.http.put(this.APIurl+'/'+ category.id, category));
    return response;
  }

  async removeCategories(id : number) : Promise<any> {
    const response = await lastValueFrom(this.http.delete(this.APIurl+'/'+id));
    return response;
  }

  // public getCategories(): Observable<any>{
  //   return of([
  //     {title:"Diseño UX/UI", courses:["Photoshop e Illustrator", "Diseño UX/UI", "Diseño UX/UI Avanzado", "UX Writing", "UX Research", "Fundamentos del Diseño Gráfico", "Prototipado (Figma y Adobe XD)", "UI"]},
  //     {title:"Marketing Digital", courses:["Community Manager & Publicidad", "Publicidad en Redes Avanzado", "Growth Marketing", "Inbound Marketing", "SEO - Optimización de motores de búsqueda", "Copywriting", "Marketing de contenidos", "Email Marketing"]},
  //     {title:"Programación y Desarrollo", courses:["Desarrollo web", "JavaScript", "React Js", "Programación Backend", "Wordpress", "Desarrollo de Aplicaciones", "Python", "Desarrollo de videojuegos", "SQL", "Angular"]},
  //   ]);
  // }
}
