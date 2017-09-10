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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ColorConverterComponent } from './color-converter.component';
import { Hsl2hexService } from '../../service/hsl2hex.service';
import { Rgb2hexService } from '../../service/rgb2hex.service';
import { Rgb2hslService } from '../../service/rgb2hsl.service';
import { BackendConfig } from '../../constants';

describe('ColorConverterComponent', () => {
  let component: ColorConverterComponent;
  let fixture: ComponentFixture<ColorConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ColorConverterComponent
      ],
      imports: [
        HttpModule,
        ReactiveFormsModule
      ],
      providers: [
        BackendConfig,
        FormBuilder,
        Hsl2hexService,
        Rgb2hexService,
        Rgb2hslService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
