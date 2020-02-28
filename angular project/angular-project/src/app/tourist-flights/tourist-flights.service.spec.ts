import { TestBed } from '@angular/core/testing';

import { TouristFlightsService } from './tourist-flights.service';

describe('TouristFlightsService', () => {
  let service: TouristFlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristFlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
