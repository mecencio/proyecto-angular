import { CategoriesService } from './categories.service';
import { TestBed } from '@angular/core/testing';

describe('CategoriesService', () => {
  let categoriesService: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    categoriesService = TestBed.inject(CategoriesService);
  });

  it('should be created', () => {
    expect(categoriesService).toBeTruthy();
  });
});
