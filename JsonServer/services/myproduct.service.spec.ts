/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyproductService } from './myproduct.service';

describe('Service: Myproduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyproductService]
    });
  });

  it('should ...', inject([MyproductService], (service: MyproductService) => {
    expect(service).toBeTruthy();
  }));
});
