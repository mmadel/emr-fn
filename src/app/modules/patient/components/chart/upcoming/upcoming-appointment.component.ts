import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { map, Observable, retry, tap } from 'rxjs';
import { ListTemplate } from 'src/app/modules/common/template/list.template';
import { Appointment } from '../../../models/appointments/appointment';
import { UpcomingAppointmentService } from '../../../services/appointment/upcoming-appointment.service';
import { PateintCaseService } from '../../../services/patient/cases/pateint-case.service';

@Component({
  selector: 'app-upcoming-appointment',
  templateUrl: './upcoming-appointment.component.html',
  styleUrls: ['./upcoming-appointment.component.css']
})
export class UpcomingAppointmentComponent extends ListTemplate implements OnInit {

  @Input() patientId: number;
  caseId: number;
  constructor(private upcomingAppointmentService: UpcomingAppointmentService
    , private pateintCaseService: PateintCaseService) { super(); }
  clinicId: number;
  appointments$!: Observable<Appointment[]>;
  columns: (string | IColumn)[];
  ngOnInit(): void {
    this.columns = this.constructColumns(['title', 'startDate', 'endDate']);
    this.appointments$ = this.upcomingAppointmentService.findAllIncomingAppointments(this.apiParams$, this.patientId).pipe(
      retry({
        delay: (error) => {
          console.warn('Retry: ', error);
          this.errorMessage$.next(error.message ?? `Error: ${JSON.stringify(error)}`);
          this.loadingData$.next(false);
          return this.retry$;
        }
      }),
      tap((response: any) => {
        this.totalItems$.next(response.number_of_matching_records);
        if (response.number_of_records) {
          this.errorMessage$.next('');
        }
        this.retry$.next(false);
        this.loadingData$.next(false);
      }),
      map((response: any) => {
        return response.records;
      })
    );
    this.pateintCaseService.selectedCase$.subscribe((caseId) => {
      if (caseId !== null)
        this.caseId = caseId;
    })
  }

}
