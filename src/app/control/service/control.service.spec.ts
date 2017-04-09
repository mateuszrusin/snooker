import { TestBed, inject } from '@angular/core/testing';

import { ControlService } from './control.service';

describe('ControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlService]
    });
  });

  it('should ...', inject([ControlService], (service: ControlService) => {
    expect(service).toBeTruthy();
  }));
});
