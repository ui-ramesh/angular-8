import { TestBed } from '@angular/core/testing';

import { ImnageDetailService } from './imnage-detail.service';

describe('ImnageDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImnageDetailService = TestBed.get(ImnageDetailService);
    expect(service).toBeTruthy();
  });
});
