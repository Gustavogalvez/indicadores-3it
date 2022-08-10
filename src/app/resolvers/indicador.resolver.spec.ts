import { TestBed } from '@angular/core/testing';

import { IndicadorResolver } from './indicador.resolver';

describe('IndicadorResolver', () => {
  let resolver: IndicadorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IndicadorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
