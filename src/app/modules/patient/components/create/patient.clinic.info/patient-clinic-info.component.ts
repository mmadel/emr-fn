import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patient-clinic-info',
  templateUrl: './patient-clinic-info.component.html',
  styleUrls: ['./patient-clinic-info.component.css']
})
export class PatientClinicInfoComponent implements OnInit {
  @Input() patient: Patient;
  constructor() { }

  ngOnInit(): void {
  }


}
