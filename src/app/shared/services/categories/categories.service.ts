import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  public getCategories(): Observable<any>{
    return of([
      {title:"Diseño UX/UI", courses:["Photoshop e Illustrator", "Diseño UX/UI", "Diseño UX/UI Avanzado", "UX Writing", "UX Research", "Fundamentos del Diseño Gráfico", "Prototipado (Figma y Adobe XD)", "UI"]},
      {title:"Marketing Digital", courses:["Community Manager & Publicidad", "Publicidad en Redes Avanzado", "Growth Marketing", "Inbound Marketing", "SEO - Optimización de motores de búsqueda", "Copywriting", "Marketing de contenidos", "Email Marketing"]},
      {title:"Programación y Desarrollo", courses:["Desarrollo web", "JavaScript", "React Js", "Programación Backend", "Wordpress", "Desarrollo de Aplicaciones", "Python", "Desarrollo de videojuegos", "SQL", "Angular"]},
    ]);
  }
}
