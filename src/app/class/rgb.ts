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

export class Rgb {

  private _red: number;
  get red(): number {
    return this._red;
  }
  set red(value: number) {
    this._red = value;
  }

  private _green: number;
  get green(): number {
    return this._green;
  }
  set green(value: number) {
    this._green = value;
  }

  private _blue: number;
  get blue(): number {
    return this._blue;
  }
  set blue(value: number) {
    this._blue = value;
  }

  constructor(obj: Object) {
    this._red = obj.hasOwnProperty('red') ? obj['red'] : 0;
    this._green = obj.hasOwnProperty('green') ? obj['green'] : 0;
    this._blue = obj.hasOwnProperty('blue') ? obj['blue'] : 0;
  }

  public toForm(): object {
    return {
      red: this.red,
      green: this.green,
      blue: this.blue
    };
  }
}
