import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { Rgb2hslService } from './rgb2hsl.service';
import { Hsl2hexService } from './hsl2hex.service';
import { Rgb2hexService } from './rgb2hex.service';
import { BackendConfig } from '../constants';

describe('Rgb2hslService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        BackendConfig,
        Hsl2hexService,
        Rgb2hexService,
        Rgb2hslService
      ]
    });
  });

  it('should be created', inject([Rgb2hslService], (service: Rgb2hslService) => {
    expect(service).toBeTruthy();
  }));
});
