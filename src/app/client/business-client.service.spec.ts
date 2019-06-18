import { TestBed } from '@angular/core/testing';

import { BusinessClientService } from './business-client.service';

describe('BusinessClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessClientService = TestBed.get(BusinessClientService);
    expect(service).toBeTruthy();
  });
});
