import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BasePaginationService } from 'src/app/modules/common/service/base-pagination.service';
import { IApiParams } from 'src/app/modules/common/interfaces/api.params';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientFinderPaginationService extends BasePaginationService {

  private baseUrl = environment.baseURL + 'patient'

  constructor(httpClient: HttpClient) { super(httpClient) }

  getPateints(config$: BehaviorSubject<IApiParams>): Observable<any> {
    return this.get(config$, this.baseUrl + "/find/clinicId/" + 1)
  }
}
