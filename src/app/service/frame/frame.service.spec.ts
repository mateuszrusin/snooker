/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Game } from './game.service';

describe('Frame', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Game]
    });
  });

  it('should ...', inject([Game], (service: Game) => {
    expect(service).toBeTruthy();
  }));
});
