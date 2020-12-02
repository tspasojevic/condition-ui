import { TestBed } from '@angular/core/testing';

import { ConditionsUiService } from './conditions-ui.service';

describe('ConditionsUiService', () => {
  let service: ConditionsUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionsUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
