import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentsStore from './students-store.reducer';

export const selectStudentsStoreState = createFeatureSelector<fromStudentsStore.State>(
  fromStudentsStore.studentsStoreFeatureKey
);

export const selectStudents = createSelector(
  selectStudentsStoreState,
  (studentsState) => studentsState.data
);