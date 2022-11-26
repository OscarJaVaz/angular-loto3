import { TestBed } from '@angular/core/testing';

import { ColoniaService } from './colonia.service';

describe('ColoniaService', () => {
  let service: ColoniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColoniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
