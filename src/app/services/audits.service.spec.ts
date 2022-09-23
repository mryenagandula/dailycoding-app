import { TestBed } from '@angular/core/testing';

import { AuditsService } from './audits.service';

describe('AuditsService', () => {
  let service: AuditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
