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
