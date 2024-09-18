import { TestBed } from '@angular/core/testing';

import { ClansService } from './clans.service';

describe('ClansService', () => {
  let service: ClansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
