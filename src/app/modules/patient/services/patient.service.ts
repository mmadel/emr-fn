import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';

import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  Observable,
  retry,
  switchMap,
  throwError
} from 'rxjs';

import { environment } from 'src/environments/environment';
import { IApiParams } from '../../common/template/interfaces/api.params';
import { Patient } from '../models/patient';
import { IData } from '../components/list/interfaces/i.data';

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
export class PatientService {
  private baseUrl = environment.baseURL + 'patient'
  constructor(private httpClient: HttpClient) { }


  create(patient: Patient) {

  }

  delete(patientId: number) {

  }

  get(config$: BehaviorSubject<IApiParams>): Observable<any> {
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

  private fetchData(params: IApiParams): Observable<IData> {
    const apiParams = {
      ...params
    };
    const httpParams: HttpParams = new HttpParams({ fromObject: apiParams });
    const options = Object.keys(httpParams).length
      ? { params: httpParams, ...httpOptions }
      : { params: {}, ...httpOptions };
    return this.httpClient
      .get<IData>(this.baseUrl + "/find/clinicId/" + 1, options)
      .pipe(
        retry({ count: 1, delay: 100000, resetOnSuccess: true }),
        catchError(this.handleHttpError)
      );
  }
  private handleHttpError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
