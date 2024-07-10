import { TestBed } from '@angular/core/testing';

import { SearchByDateService } from './search-by-date.service';

describe('SearchByDateService', () => {
  let service: SearchByDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
