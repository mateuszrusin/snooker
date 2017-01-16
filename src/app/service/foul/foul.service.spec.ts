/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoulService } from './foul.service';

describe('FoulService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoulService]
    });
  });

  it('should ...', inject([FoulService], (service: FoulService) => {
    expect(service).toBeTruthy();
  }));
});
