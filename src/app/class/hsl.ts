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
}
