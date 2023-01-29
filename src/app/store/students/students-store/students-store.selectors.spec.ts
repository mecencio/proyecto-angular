import * as fromStudentsStore from './students-store.reducer';
import { selectStudentsStoreState } from './students-store.selectors';

describe('StudentsStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStudentsStoreState({
      [fromStudentsStore.studentsStoreFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
