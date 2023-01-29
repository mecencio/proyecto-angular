import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/core/models/student.model';

export const loadStudentsStores = createAction(
  '[StudentsStore] Load StudentsStores'
);

export const loadStudentsStoresSuccess = createAction(
  '[StudentsStore] Load StudentsStores Success',
  props<{ data: Student[] }>()
);

export const loadStudentsStoresFailure = createAction(
  '[StudentsStore] Load StudentsStores Failure',
  props<{ error: Student[] }>()
);
