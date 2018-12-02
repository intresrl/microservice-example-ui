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

import { FooterComponent } from './footer.component';
import { ColorConverter } from '../../constants';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  const ColorConverterValues = {
    version: '0.1.0',
    company: 'in3',
    yearOfFirstRelease: '2016'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      providers: [
        {
          provide: ColorConverter,
          useValue: ColorConverterValues
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as version '${ColorConverterValues.version}'`, async(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.colorConverter.version).toEqual(ColorConverterValues.version);
  }));

  it(`should have as company '${ColorConverterValues.company}'`, async(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.colorConverter.company).toEqual(ColorConverterValues.company);
  }));

  it(`should have as yearOfFirstRelease '${ColorConverterValues.yearOfFirstRelease}'`, async(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.colorConverter.yearOfFirstRelease).toEqual(ColorConverterValues.yearOfFirstRelease);
  }));

  it('should render footer disclaimer in a p tag', async(() => {
    const currentYear = new Date().getFullYear();
    const footerText = ` Powered by ${ColorConverterValues.company} ©${ColorConverterValues.yearOfFirstRelease}-${currentYear}. ` +
      `Code licensed under GPL-3.0. ` +
      `Documentation licensed under CC BY-SA 4.0. ` +
      `Version ${ColorConverterValues.version}.`;

    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(footerText);
  }));
});
