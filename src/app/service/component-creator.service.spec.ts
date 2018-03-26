import { TestBed, inject } from '@angular/core/testing';

import { ComponentCreatorService } from './component-creator.service';

describe('ComponentCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentCreatorService]
    });
  });

  it('should be created', inject([ComponentCreatorService], (service: ComponentCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
