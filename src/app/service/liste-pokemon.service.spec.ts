import { TestBed } from '@angular/core/testing';

import { ListePokemonService } from './liste-pokemon.service';

describe('ListePokemonService', () => {
  let service: ListePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
