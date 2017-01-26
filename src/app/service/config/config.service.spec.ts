/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Config } from './config.service';

describe('Config', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Config]
    });
  });

  it('should ...', inject([Config], (service: Config) => {
    expect(service).toBeTruthy();
  }));
});
