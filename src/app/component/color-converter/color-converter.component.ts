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

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rgb2hexService } from '../../service/rgb2hex.service';
import { Hsl2hexService } from '../../service/hsl2hex.service';
import { Rgb } from '../../class/rgb';
import { Hex } from '../../class/hex';
import { Hsl } from '../../class/hsl';
import { Rgb2hslService } from '../../service/rgb2hsl.service';

@Component({
  selector: 'app-color-converter',
  templateUrl: './color-converter.component.html',
  styleUrls: ['./color-converter.component.scss']
})
export class ColorConverterComponent {
  colorConverterForm: FormGroup;

  constructor(private rgb2hexService: Rgb2hexService,
              private hsl2hexService: Hsl2hexService,
              private rgb2hslService: Rgb2hslService,
              private fb: FormBuilder) {
    this.createForm();
  }

  private convertRgb2Hex() {
    const formGroup: FormGroup = this.colorConverterForm.get('rgb2hex') as FormGroup;
    if (formGroup.valid) {
      const rgb: Rgb = new Rgb(formGroup.getRawValue());
      this.rgb2hexService.convertRgb2Hex(rgb).subscribe((hex: Hex) => formGroup.patchValue(hex.toForm()));
    } else {
      alert('invalid');
    }
  }

  private convertHex2rgb() {
    const formGroup: FormGroup = this.colorConverterForm.get('hex2rgb') as FormGroup;
    if (formGroup.valid) {
      const hex: Hex = new Hex(formGroup.getRawValue());
      this.rgb2hexService.convertHex2Rgb(hex).subscribe((rgb: Rgb) => formGroup.patchValue(rgb.toForm()));
    } else {
      alert('invalid');
    }
  }

  private convertHsl2hex() {
    const formGroup: FormGroup = this.colorConverterForm.get('hsl2hex') as FormGroup;
    if (formGroup.valid) {
      const hsl: Hsl = new Hsl(formGroup.getRawValue());
      this.hsl2hexService.convertHsl2Hex(hsl).subscribe((hex: Hex) => formGroup.patchValue(hex.toForm()));
    } else {
      alert('invalid');
    }
  }

  private convertHex2hsl() {
    const formGroup: FormGroup = this.colorConverterForm.get('hex2hsl') as FormGroup;
    if (formGroup.valid) {
      const hex: Hex = new Hex(formGroup.getRawValue());
      this.hsl2hexService.convertHex2Hsl(hex).subscribe((hsl: Hsl) => formGroup.patchValue(hsl.toForm()));
    } else {
      alert('invalid');
    }
  }

  private convertRgb2Hsl() {
    const formGroup: FormGroup = this.colorConverterForm.get('rgb2hsl') as FormGroup;
    if (formGroup.valid) {
      const rgb: Rgb = new Rgb(formGroup.getRawValue());
      this.rgb2hslService.convertRgb2Hsl(rgb).subscribe((hsl: Hsl) => formGroup.patchValue(hsl.toForm()));
    } else {
      alert('invalid');
    }
  }

  private convertHsl2Rgb() {
    const formGroup: FormGroup = this.colorConverterForm.get('hsl2rgb') as FormGroup;
    if (formGroup.valid) {
      const hsl: Hsl = new Hsl(formGroup.getRawValue());
      this.rgb2hslService.convertHsl2Rgb(hsl).subscribe((rgb: Rgb) => formGroup.patchValue(rgb.toForm()));
    } else {
      alert('invalid');
    }
  }

  private createForm() {
    this.colorConverterForm = this.fb.group({
      rgb2hex: this.fb.group({
        red: ['', Validators.compose([Validators.required, Validators.max(255), Validators.min(0)])],
        green: ['', Validators.compose([Validators.required, Validators.max(255), Validators.min(0)])],
        blue: ['', Validators.compose([Validators.required, Validators.max(255), Validators.min(0)])],
        hex: {value: '', disabled: true}
      }),
      hex2rgb: this.fb.group({
        red: {value: '', disabled: true},
        green: {value: '', disabled: true},
        blue: {value: '', disabled: true},
        hex: ['', Validators.compose([Validators.required, Validators.pattern(/^([a-f\d]){6}$/g)])]
      }),
      hsl2hex: this.fb.group({
        hue: ['', Validators.compose([Validators.required, Validators.max(360), Validators.min(0)])],
        saturation: ['', Validators.compose([Validators.required, Validators.max(100), Validators.min(0)])],
        lightness: ['', Validators.compose([Validators.required, Validators.max(100), Validators.min(0)])],
        hex: {value: '', disabled: true}
      }),
      hex2hsl: this.fb.group({
        hue: {value: '', disabled: true},
        saturation: {value: '', disabled: true},
        lightness: {value: '', disabled: true},
        hex: ['', Validators.compose([Validators.required, Validators.pattern(/^([a-f\d]){6}$/g)])]
      }),
      rgb2hsl: this.fb.group({
        red: ['', Validators.compose([Validators.required, Validators.max(255), Validators.min(0)])],
        green: ['', Validators.compose([Validators.required, Validators.max(255), Validators.min(0)])],
        blue: ['', Validators.compose([Validators.required, Validators.max(255), Validators.min(0)])],
        hue: {value: '', disabled: true},
        saturation: {value: '', disabled: true},
        lightness: {value: '', disabled: true}
      }),
      hsl2rgb: this.fb.group({
        red: {value: '', disabled: true},
        green: {value: '', disabled: true},
        blue: {value: '', disabled: true},
        hue: ['', Validators.compose([Validators.required, Validators.max(360), Validators.min(0)])],
        saturation: ['', Validators.compose([Validators.required, Validators.max(100), Validators.min(0)])],
        lightness: ['', Validators.compose([Validators.required, Validators.max(100), Validators.min(0)])]
      })
    });
  }
}
