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
}
