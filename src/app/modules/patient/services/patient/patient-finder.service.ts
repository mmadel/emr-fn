import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PateintResponse } from '../../models/response/patient.response';

@Injectable({
  providedIn: 'root'
})
export class PatientFinderService {
  private baseUrl = environment.baseURL + 'patient'
  constructor(private httpClient: HttpClient) { }

  getPatient(patientId: number, clinicId: number) {
    const headers = { 'content-type': 'application/json' }
    var getPatientURL = this.baseUrl + '/find/clinicId/' + 1 + '/patient/' + patientId
    return this.httpClient.get<PateintResponse>(`${getPatientURL}`, { 'headers': headers },)
  }
}
