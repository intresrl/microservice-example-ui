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

@Injectable()
export class I3way {

  private _version = '0.0.1';
  get version(): string {
    return this._version;
  }

  private _company = 'i3';
  get company(): string {
    return this._company;
  }

  private _yearOfFirstRelease = '2017';
  get yearOfFirstRelease(): string {
    return this._yearOfFirstRelease;
  }
}

@Injectable()
export class BackendConfig {

  private _protocol = 'http';
  get protocol(): string {
    return this._protocol;
  }

  // private _address = 'localhost';
  private _address = '192.168.50.93';
  get address(): string {
    return this._address;
  }

  private _port = 80;
  get port(): number {
    return this._port;
  }

  get url(): string {
    return `${this._protocol}://${this._address}:${this._port}/api`;
  }
}
