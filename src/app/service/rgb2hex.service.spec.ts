import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { Rgb2hexService } from './rgb2hex.service';
import { BackendConfig } from '../constants';
import { AbstractColorConverterHttpService } from './abstract-color-converter-http.service';

describe('Rgb2hexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AbstractColorConverterHttpService,
        Rgb2hexService,
        BackendConfig
      ]
    });
  });

  it('should be created', inject([Rgb2hexService], (service: Rgb2hexService) => {
    expect(service).toBeTruthy();
  }));
});
