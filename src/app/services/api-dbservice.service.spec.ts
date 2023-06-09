import { TestBed } from '@angular/core/testing';

import { ApiDBserviceService } from './api-dbservice.service';

describe('ApiDBserviceService', () => {
  let service: ApiDBserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDBserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
