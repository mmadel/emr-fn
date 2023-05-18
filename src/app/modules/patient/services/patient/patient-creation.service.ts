import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Patient } from '../../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientCreationService {
  private baseUrl = environment.baseURL + 'patient'
  constructor(private httpClient: HttpClient) { }

  create(patient: Patient) {
    const headers = { 'content-type': 'application/json' }
    var createURL = this.baseUrl + '/create'
    return this.httpClient.post(`${createURL}`, JSON.stringify(patient), { 'headers': headers })
  }

  delete(patientId: number) {

  }

  update(patient:Patient){
    
  }
}
