import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, retry, tap } from 'rxjs';
import { ListTemplate } from 'src/app/modules/common/template/list.template';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent extends ListTemplate implements OnInit {

  constructor(
    private router: Router,
    private patientService: PatientService,
    private toastr: ToastrService) {
    super();
  }
  columns: (string | IColumn)[];
  patient$!: Observable<Patient[]>;

  ngOnInit(): void {
    this.columns = this.constructColumns(['firstName', 'middleName', 'lastName', 'patientId', 'actions']);
    this.initListComponent();
    this.patient$ = this.patientService.get(this.apiParams$).pipe(
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

  create() {
    this.router.navigateByUrl('/patient/create');
  }
  remove(patientId: number) {

  }
}
