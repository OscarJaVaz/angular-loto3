import { TestBed } from '@angular/core/testing';

import { ArchivoCargaService } from './archivo-carga.service';

describe('ArchivoCargaService', () => {
  let service: ArchivoCargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivoCargaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
