import { Component, OnInit } from '@angular/core';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { Observable } from 'rxjs';
import { ListTemplate } from 'src/app/modules/common/template/list.template';
import { Appointment } from '../../../models/appointments/appointment';

@Component({
  selector: 'app-previous-appointment',
  templateUrl: './previous-appointment.component.html',
  styleUrls: ['./previous-appointment.component.css']
})
export class PreviousAppointmentComponent extends ListTemplate implements OnInit {

  appointments$!: Observable<Appointment[]>;
  columns: (string | IColumn)[];
  constructor() { super();}

  ngOnInit(): void {
    this.columns = this.constructColumns(['Title', 'StartDate', 'EndDate','ViewHistory']);
  }

}
