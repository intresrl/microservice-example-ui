/*
 * This color converter software is part of a micro-service architecture written for demonstration purposes.
 * Copyright (C)  2017  Gianni Bombelli @ Intré S.r.l.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

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
      .map((response: Response) => new Hex(response.json()));
  }

  public convertHex2Rgb(hex: Hex): Observable<Rgb> {
    return this.httpGet(this.prepareRequestOptions(hex), 'hex2rgb')
      .map((response: Response) => new Rgb(response.json()));
  }
}
