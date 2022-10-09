import { TestBed } from '@angular/core/testing';

import { CategoriesAndTagsService } from './categories-and-tags.service';

describe('CategoriesAndTagsService', () => {
  let service: CategoriesAndTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesAndTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
