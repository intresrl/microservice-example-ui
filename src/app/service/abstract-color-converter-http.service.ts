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
