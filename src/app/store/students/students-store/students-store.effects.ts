import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as StudentsStoreActions from './students-store.actions';
import { Student } from 'src/app/core/models/student.model';


@Injectable()
export class StudentsStoreEffects {

  loadStudentsStores$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(StudentsStoreActions.loadStudentsStores),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getStudentsfromAPI().pipe(
          map(data => StudentsStoreActions.loadStudentsStoresSuccess({ data })),
          catchError(error => of(StudentsStoreActions.loadStudentsStoresFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private httpClient : HttpClient) {}

  private getStudentsfromAPI(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('https://63a8ec87f4962215b58a3299.mockapi.io/students')
  }
}
