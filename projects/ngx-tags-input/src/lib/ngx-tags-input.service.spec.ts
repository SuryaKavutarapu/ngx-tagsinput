import { TestBed } from '@angular/core/testing';

import { NgxMultiTagsInputService } from './ngx-tags-input.service';

describe('NgxMultiTagsInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMultiTagsInputService = TestBed.get(NgxMultiTagsInputService);
    expect(service).toBeTruthy();
  });
});
