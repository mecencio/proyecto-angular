import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StudentsStoreEffects } from './students-store.effects';

describe('StudentsStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentsStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentsStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StudentsStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
