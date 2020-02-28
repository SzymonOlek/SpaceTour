import { TestBed } from '@angular/core/testing';

import { NewFlightService } from './new-flight.service';

describe('NewFlightService', () => {
  let service: NewFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
