/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Players } from './players.service';

describe('Players', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Players]
    });
  });

  it('should ...', inject([Players], (service: Players) => {
    expect(service).toBeTruthy();
  }));
});
