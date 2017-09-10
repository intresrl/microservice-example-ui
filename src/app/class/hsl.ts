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

export class Hsl {

  private _hue: number;
  get hue(): number {
    return this._hue;
  }
  set hue(value: number) {
    this._hue = value;
  }

  private _saturation: number;
  get saturation(): number {
    return this._saturation;
  }
  set saturation(value: number) {
    this._saturation = value;
  }

  private _lightness: number;
  get lightness(): number {
    return this._lightness;
  }
  set lightness(value: number) {
    this._lightness = value;
  }

  constructor(obj: Object) {
    this._hue = obj.hasOwnProperty('hue') ? obj['hue'] : 0;
    this._saturation = obj.hasOwnProperty('saturation') ? obj['saturation'] : 0;
    this._lightness = obj.hasOwnProperty('lightness') ? obj['lightness'] : 0;
  }

  public toForm(): object {
    return {
      hue: this.hue,
      saturation: this.saturation,
      lightness: this.lightness
    };
  }}
