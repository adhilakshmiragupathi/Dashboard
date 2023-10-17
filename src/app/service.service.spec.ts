import { TestBed } from '@angular/core/testing';

import { MyHttpService } from './service.service';

describe('ServiceService', () => {
  let service: MyHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
