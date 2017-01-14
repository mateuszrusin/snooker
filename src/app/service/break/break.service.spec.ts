/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BreakService } from './break.service.ts';

describe('BreakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakService]
    });
  });

  it('should ...', inject([BreakService], (service: BreakService) => {
    expect(service).toBeTruthy();
  }));
});
