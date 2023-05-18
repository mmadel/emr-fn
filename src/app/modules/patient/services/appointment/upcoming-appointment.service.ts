import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpcomingAppointmentService {

  private baseUrl = environment.baseURL + 'appointment/chart/incoming'
  constructor(private httpClient: HttpClient) { }

  public findAllIncomingAppointments() {

  }

  public findIncomingAppointmentsByCase() {

  }
}
