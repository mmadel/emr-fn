import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IApiParams } from 'src/app/modules/common/interfaces/api.params';
import { BasePaginationService } from 'src/app/modules/common/service/base-pagination.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreviousAppointmentService extends BasePaginationService {
  private baseUrl = environment.baseURL + 'appointment/chart/previous'
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public findAllPreviousAppointments(config$: BehaviorSubject<IApiParams>, pateintId: number): Observable<any> {
    return this.get(config$, this.baseUrl + '/find/patientId/' + pateintId + '/clinicId/' + 2)
  }

  public findPreviousAppointmentsByCase(config$: BehaviorSubject<IApiParams>,
    pateintId: number,
    caseId: number): Observable<any> {
    return this.get(config$, this.baseUrl + '/find/patientId/' + pateintId + '/clinicId/' + 1 + '/patientCaseId/' + caseId);

  }
}
