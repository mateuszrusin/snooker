/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActivePlayerService } from './active-player.service.ts';

describe('ActivePlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivePlayerService]
    });
  });

  it('should ...', inject([ActivePlayerService], (service: ActivePlayerService) => {
    expect(service).toBeTruthy();
  }));
});
