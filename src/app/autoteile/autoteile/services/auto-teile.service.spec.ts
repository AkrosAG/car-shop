import { TestBed } from '@angular/core/testing';

import { AutoTeileService } from './auto-teile.service';

describe('AutoTeileService', () => {
  let service: AutoTeileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoTeileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
