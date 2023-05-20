import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IApiParams } from 'src/app/modules/common/interfaces/api.params';
import { BasePaginationService } from 'src/app/modules/common/service/base-pagination.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancelNoShowService extends BasePaginationService {

  private baseUrl = environment.baseURL + 'appointment/chart/cno/find/cancel/noshow'
  constructor(httpClient: HttpClient) { super(httpClient) }

  public findCancelNoShowAppointments(config$: BehaviorSubject<IApiParams>,
    pateintId: number,
    clinicId: number,
    caseId: number) {
    return this.get(config$, this.baseUrl + '/patientId/' + pateintId + '/clinicId/' + 2 + '/patientCaseId/' + caseId)
  }
}
