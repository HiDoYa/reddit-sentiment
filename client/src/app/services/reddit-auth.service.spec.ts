import { TestBed } from '@angular/core/testing';

import { RedditAuthService } from './reddit-auth.service';

describe('RedditAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditAuthService = TestBed.get(RedditAuthService);
    expect(service).toBeTruthy();
  });
});
