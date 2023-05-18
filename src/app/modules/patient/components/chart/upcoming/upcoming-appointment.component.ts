import { Component, OnInit } from '@angular/core';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { Observable } from 'rxjs';
import { ListTemplate } from 'src/app/modules/common/template/list.template';
import { Appointment } from '../../../models/appointments/appointment';

@Component({
  selector: 'app-upcoming-appointment',
  templateUrl: './upcoming-appointment.component.html',
  styleUrls: ['./upcoming-appointment.component.css']
})
export class UpcomingAppointmentComponent extends ListTemplate implements OnInit {

  constructor() { super(); }
  appointments$!: Observable<Appointment[]>;
  columns: (string | IColumn)[];
  ngOnInit(): void {
    this.columns = this.constructColumns(['Title', 'StartDate', 'EndDate']);
  }

}
