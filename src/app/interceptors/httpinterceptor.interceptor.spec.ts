import { TestBed } from '@angular/core/testing';

import { HttpinterceptorInterceptor } from './httpinterceptor.interceptor';

describe('HttpinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpinterceptorInterceptor = TestBed.inject(HttpinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
