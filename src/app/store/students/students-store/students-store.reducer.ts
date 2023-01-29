import { createReducer, on } from '@ngrx/store';
import { Student } from 'src/app/core/models/student.model';
import * as StudentsStoreActions from './students-store.actions';

export const studentsStoreFeatureKey = 'studentsStore';

export interface State {
  data : Student[],
}

export const initialState: State = {
  data: [],
};

export const reducer = createReducer(
  initialState,

  on(StudentsStoreActions.loadStudentsStores, state => state),
  on(StudentsStoreActions.loadStudentsStoresSuccess, (state, action) => {
    return {
      ...state,
      data: action.data
    }
  }),
  on(StudentsStoreActions.loadStudentsStoresFailure, (state, action) => state),

);
