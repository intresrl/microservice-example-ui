import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Hex } from '../class/hex';
import { Rgb } from '../class/rgb';
import { AbstractColorConverterHttpService } from './abstract-color-converter-http.service';

@Injectable()
export class Rgb2hexService extends AbstractColorConverterHttpService {

  public convertRgb2Hex(rgb: Rgb): Observable<Hex> {
    return this.httpGet(this.prepareRequestOptions(rgb), 'rgb2hex')
      .map((response: Response) => response.json() as Hex);
  }

  public convertHex2Rgb(hex: Hex): Observable<Rgb> {
    return this.httpGet(this.prepareRequestOptions(hex), 'hex2rgb')
      .map((response: Response) => response.json() as Rgb);
  }
}
