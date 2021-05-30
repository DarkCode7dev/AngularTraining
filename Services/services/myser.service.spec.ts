/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyserService } from './myser.service';

describe('Service: Myser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyserService]
    });
  });

  it('should ...', inject([MyserService], (service: MyserService) => {
    expect(service).toBeTruthy();
  }));
});
