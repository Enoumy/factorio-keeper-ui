import { TestBed } from '@angular/core/testing';

import { BlueprintsService } from './blueprints.service';

describe('BlueprintsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlueprintsService = TestBed.get(BlueprintsService);
    expect(service).toBeTruthy();
  });
});
