import { TestBed } from '@angular/core/testing';

import { TouristsService } from './tourists.service';

describe('TouristsService', () => {
  let service: TouristsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
