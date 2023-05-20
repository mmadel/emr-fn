import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { map, Observable, retry, tap } from 'rxjs';
import { ListTemplate } from 'src/app/modules/common/template/list.template';
import { Appointment } from '../../../models/appointments/appointment';
import { PreviousAppointmentService } from '../../../services/appointment/previous-appointment.service';
import { PateintCaseService } from '../../../services/patient/cases/pateint-case.service';

@Component({
  selector: 'app-previous-appointment',
  templateUrl: './previous-appointment.component.html',
  styleUrls: ['./previous-appointment.component.css']
})
export class PreviousAppointmentComponent extends ListTemplate implements OnInit {
  @Input() patientId: number;
  caseId: number = 0;
  appointments$!: Observable<Appointment[]>;
  columns: (string | IColumn)[];
  constructor(
    private previousAppointmentService: PreviousAppointmentService,
    private pateintCaseService: PateintCaseService) { super(); }

  ngOnInit(): void {
    this.columns = this.constructColumns(['title', 'startDate', 'endDate', 'viewHistory']);
    if (this.caseId === 0)
      this.getAllAppointments();
    this.pateintCaseService.selectedCase$.subscribe((caseId) => {
      if (caseId !== null)
        this.getPreviousAppointments();
    })

  }
  private getPreviousAppointments() {
    if (Number(this.caseId) === 0)
      this.getAllAppointments()
    if (Number(this.caseId) > 0)
      this.getAppointmentsByCase();
  }

  private getAllAppointments() {
    this.appointments$ = this.previousAppointmentService.findAllPreviousAppointments(this.apiParams$, this.patientId).pipe(
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
  }

  private getAppointmentsByCase() {
    this.appointments$ = this.previousAppointmentService.findPreviousAppointmentsByCase(this.apiParams$, this.patientId, this.caseId).pipe(
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
  }
}
