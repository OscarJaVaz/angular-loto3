import { TestBed } from '@angular/core/testing';

import { DonanteGeneralService } from './donante-general.service';

describe('DonanteGeneralService', () => {
  let service: DonanteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonanteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
