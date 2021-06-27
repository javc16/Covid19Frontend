import { TestBed } from '@angular/core/testing';

import { ControlVacunasService } from './control-vacunas.service';

describe('ControlVacunasService', () => {
  let service: ControlVacunasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlVacunasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
