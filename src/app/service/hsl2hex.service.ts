import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Hex } from '../class/hex';
import { Hsl } from '../class/hsl';
import { AbstractColorConverterHttpService } from './abstract-color-converter-http.service';

@Injectable()
export class Hsl2hexService extends AbstractColorConverterHttpService {

  public convertHsl2Hex(hsl: Hsl): Observable<Hex> {
    return this.httpGet(this.prepareRequestOptions(hsl), 'hsl2hex')
      .map((response: Response) => response.json() as Hex);
  }

  public convertHex2Hsl(hex: Hex): Observable<Hsl> {
    return this.httpGet(this.prepareRequestOptions(hex), 'hex2hsl')
      .map((response: Response) => response.json() as Hsl);
  }
}
