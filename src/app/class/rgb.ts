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
}
