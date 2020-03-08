import { TestBed } from '@angular/core/testing';

import { Productos.ServiceService } from './productos.service.service';

describe('Productos.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Productos.ServiceService = TestBed.get(Productos.ServiceService);
    expect(service).toBeTruthy();
  });
});
