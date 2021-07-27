import { TestBed } from '@angular/core/testing';

import { EquipajeService } from './equipaje.service';

describe('EquipajeService', () => {
  let service: EquipajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
