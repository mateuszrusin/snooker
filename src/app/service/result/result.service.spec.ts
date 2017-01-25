/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Result } from './result.service';

describe('Result', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Result]
    });
  });

  it('should ...', inject([Result], (service: Result) => {
    expect(service).toBeTruthy();
  }));
});
