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

import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppRouting } from './app.router';
import { ColorConverterComponent } from './component/color-converter/color-converter.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ColorConverter } from './constants';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Hsl2hexService } from './service/hsl2hex.service';
import { Rgb2hexService } from './service/rgb2hex.service';
import { Rgb2hslService } from './service/rgb2hsl.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ColorConverterComponent,
        FooterComponent,
        HeaderComponent,
        PageNotFoundComponent
      ],
      imports: [
        AppRouting,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue : '/'
        },
        ColorConverter
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
