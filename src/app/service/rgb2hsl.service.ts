import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

import { Rgb } from '../class/rgb';
import { Hex } from '../class/hex';
import { Hsl } from '../class/hsl';
import { Hsl2hexService } from './hsl2hex.service';
import { Rgb2hexService } from './rgb2hex.service';

@Injectable()
export class Rgb2hslService {

  constructor(private hsl2hexService: Hsl2hexService, private rgb2hexService: Rgb2hexService) {
  }

  public convertRgb2Hsl(rgb: Rgb): Observable<Hsl> {
    return this.rgb2hexService.convertRgb2Hex(rgb)
      .mergeMap((hex: Hex) => this.hsl2hexService.convertHex2Hsl(hex));
  }

  public convertHsl2Rgb(hsl: Hsl): Observable<Rgb> {
    return this.hsl2hexService.convertHsl2Hex(hsl)
      .mergeMap((hex: Hex) => this.rgb2hexService.convertHex2Rgb(hex));
  }
}
