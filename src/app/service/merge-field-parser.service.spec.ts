import { TestBed, inject } from '@angular/core/testing';

import { MergeFieldParserService } from './merge-field-parser.service';

describe('MergeFieldParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MergeFieldParserService]
    });
  });

  it('should be created', inject([MergeFieldParserService], (service: MergeFieldParserService) => {
    expect(service).toBeTruthy();
  }));
});
