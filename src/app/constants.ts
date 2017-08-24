import {Injectable} from '@angular/core';

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

  private _port = 80
  get port(): number {
    return this._port;
  }

  get url(): string {
    return `${this._protocol}://${this._address}:${this._port}/api`;
  }
}
