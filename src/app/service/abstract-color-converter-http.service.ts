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
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { BackendConfig } from '../constants';

@Injectable()
export abstract class AbstractColorConverterHttpService {

  constructor(private http: Http, private backendConfig: BackendConfig) {}

  protected prepareRequestOptions(queryParams: any): RequestOptions {
    const requestOptions = new RequestOptions();
    requestOptions.params = new URLSearchParams();
    Object.getOwnPropertyNames(Object.getPrototypeOf(queryParams))
      .filter((key) => key !== 'constructor')
      .forEach((key: string) => requestOptions.params.set(key, queryParams[key]));

    return requestOptions;
  }

  protected httpGet(requestOptions: RequestOptions, route: string): Observable<any> {
    return this.http
      .get(`${this.backendConfig.url}/${route}`, requestOptions)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
