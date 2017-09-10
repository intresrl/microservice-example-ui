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

export class Hex {
  private _hex: string;
  get hex(): string {
    return this._hex;
  }
  set hex(value: string) {
    this._hex = value;
  }

  constructor(obj: Object) {
    this._hex = obj.hasOwnProperty('hex') ? obj['hex'] : '';
  }

  public toForm(): Object {
    return {hex: this.hex};
  }
}
