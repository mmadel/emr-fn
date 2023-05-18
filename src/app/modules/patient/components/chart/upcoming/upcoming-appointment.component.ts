import { Component, OnInit } from '@angular/core';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { ListTemplate } from 'src/app/modules/common/template/list.template';

@Component({
  selector: 'app-upcoming-appointment',
  templateUrl: './upcoming-appointment.component.html',
  styleUrls: ['./upcoming-appointment.component.css']
})
export class UpcomingAppointmentComponent extends ListTemplate implements OnInit {

  constructor() { super(); }

  columns: (string | IColumn)[];
  ngOnInit(): void {
  }

}
