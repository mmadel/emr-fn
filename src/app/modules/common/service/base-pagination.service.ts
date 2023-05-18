import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, Observable, retry, switchMap, throwError } from 'rxjs';
import { PaginationData } from '../interfaces/pagination.data';

import { IApiParams } from '../interfaces/api.params';
const httpOptions = {
  // headers: new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   Connection: 'keep-alive'
  // })
};
@Injectable({
  providedIn: 'root'
})
export class BasePaginationService {
  url: string;
  constructor(private httpClient: HttpClient) { }
  get(config$: BehaviorSubject<IApiParams>, url: string): Observable<any> {
    this.url = url;
    return config$.pipe(
      debounceTime(100),
      distinctUntilChanged(
        (previous, current) => {
          return JSON.stringify(previous) === JSON.stringify(current);
        }
      ),
      switchMap((config) => this.fetchData(config))
    );
  }
  private fetchData(params: IApiParams): Observable<PaginationData> {
    const apiParams = {
      ...params
    };
    const httpParams: HttpParams = new HttpParams({ fromObject: apiParams });
    const options = Object.keys(httpParams).length
      ? { params: httpParams, ...httpOptions }
      : { params: {}, ...httpOptions };
    return this.httpClient
      .get<PaginationData>(this.url, options)
      .pipe(
        retry({ count: 1, delay: 100000, resetOnSuccess: true }),
        catchError(this.handleHttpError)
      );
  }
  private handleHttpError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
