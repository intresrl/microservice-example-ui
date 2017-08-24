import { inject, TestBed } from '@angular/core/testing';
import 'rxjs/add/operator/catch';

import { AbstractColorConverterHttpService } from './abstract-color-converter-http.service';
import { HttpModule } from '@angular/http';
import { BackendConfig } from '../constants';

describe('AbstractHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AbstractColorConverterHttpService,
        BackendConfig
      ]
    });
  });

  it('should be created', inject([AbstractColorConverterHttpService], (service: AbstractColorConverterHttpService) => {
    expect(service).toBeTruthy();
  }));
});
