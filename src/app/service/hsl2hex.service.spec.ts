import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { Hsl2hexService } from './hsl2hex.service';
import { BackendConfig } from '../constants';
import { AbstractColorConverterHttpService } from './abstract-color-converter-http.service';

describe('Hsl2hexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AbstractColorConverterHttpService,
        Hsl2hexService,
        BackendConfig
      ]
    });
  });

  it('should be created', inject([Hsl2hexService], (service: Hsl2hexService) => {
    expect(service).toBeTruthy();
  }));
});
