import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, lastValueFrom } from 'rxjs';
import { environment } from 'src/enviorments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  get(paraeters: ServiceParameter, subscriber?: Subscriber<any>): Promise<any> {
    return this.executeHttpRequest(HttpVerb.GET, paraeters, subscriber);
  }

  post(paraeters: ServiceParameter,subscriber?: Subscriber<any>): Promise<any> {
    return this.executeHttpRequest(HttpVerb.POST, paraeters, subscriber);
  }
  
  put(paraeters: ServiceParameter, subscriber?: Subscriber<any>): Promise<any> {
    return this.executeHttpRequest(HttpVerb.PUT, paraeters, subscriber);
  }
  
  patch(paraeters: ServiceParameter, subscriber?: Subscriber<any>): Promise<any> {
    return this.executeHttpRequest(HttpVerb.PATCH, paraeters, subscriber);
  }
  
  delete(paraeters: ServiceParameter, subscriber?: Subscriber<any>): Promise<any> {
    return this.executeHttpRequest(HttpVerb.DELETE, paraeters, subscriber);
  }

  private async executeHttpRequest(httoVerb: HttpVerb, parameters: ServiceParameter, subscriber?: Subscriber<any>): Promise<any> {
    const httpHeader = this.geHeaders();
    const url = this.getUrlPath(parameters);
    console.log(url)
    let observable: Observable<any>;

    switch (httoVerb) {
      case HttpVerb.GET:
        observable = this.http.get<any>(url, { headers: httpHeader, params: parameters.httpParams });
        break;
      case HttpVerb.POST:
        observable = this.http.post<any>(url, parameters.object, { headers: httpHeader, params: parameters.httpParams })
        break;
      case HttpVerb.PUT:
        observable = this.http.put<any>(url, parameters.object, { headers: httpHeader, params: parameters.httpParams })
        break;
      case HttpVerb.PATCH:
        observable = this.http.put<any>(url, parameters.object, { headers: httpHeader, params: parameters.httpParams })
        break;
      case HttpVerb.DELETE:
        observable = this.http.delete<any>(url, { headers: httpHeader, params: parameters.httpParams })
        break;
    }

    //New way to use rxjs
    const source$ = observable.pipe();
    return await lastValueFrom(source$)
      .then(response => {
        return response;
      });

    //this way is deprecated and will be remove in versions 8 or higher of rxjs
    // return observable.toPromise()
    //   .then(response => {
    //     console.log('executeHttpRequest2')
    //     return response;
    //   })
  }

  private geHeaders() {
    let httpHeader = new HttpHeaders();
    httpHeader = httpHeader
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return httpHeader;
  }

  private getUrlPath(pars: ServiceParameter): string {
    let path = environment.whitelist

    if (pars.path != null)
      path += '' + pars.path;

    if (pars.code != null)
      path += '/' + pars.code;

    return path;
  }

}

export class ServiceParameter {

  constructor() {
  }

  private _httpParams: HttpParams = new HttpParams();
  private _path: string = '';
  private _object: any;
  private _code: number = 0;
  private _isBlob: Boolean = false;

  get path(): string {
    return this._path;
  }

  set path(p: string) {
    this._path = p;
  }

  get object(): any {
    return this._object;
  }

  set object(p: any) {
    this._object = p;
  }

  get code(): number {
    return this._code;
  }

  set code(p: number) {
    this._code = p;
  }

  get isBlob(): Boolean {
    return this._isBlob;
  }

  set isBlob(p: Boolean) {
    this._isBlob = p;
  }

  get httpParams(): HttpParams {
    return this._httpParams;
  }

  set httpParams(p: HttpParams) {
    this._httpParams = p;
  }

  addParameter(key: string, value: any) {
    this._httpParams = this._httpParams.append(key, value);
  }

}

export enum HttpVerb {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
}