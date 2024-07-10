import { TestBed } from '@angular/core/testing';

import { SearchByLocationService } from './search-by-location.service';

describe('SearchByLocationService', () => {
  let service: SearchByLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
