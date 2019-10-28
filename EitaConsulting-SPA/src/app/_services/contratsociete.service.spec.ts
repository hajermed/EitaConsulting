/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContratsocieteService } from './contratsociete.service';

describe('Service: Contratsociete', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContratsocieteService]
    });
  });

  it('should ...', inject([ContratsocieteService], (service: ContratsocieteService) => {
    expect(service).toBeTruthy();
  }));
});
