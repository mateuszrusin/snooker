/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BallsService } from './balls.service';

describe('BallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BallsService]
    });
  });

  it('should ...', inject([BallsService], (service: BallsService) => {
    expect(service).toBeTruthy();
  }));
});
