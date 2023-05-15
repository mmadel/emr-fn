import { Component, Input, OnInit } from '@angular/core';
import { Clinic } from '../../../models/clinic';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patient-clinic-info',
  templateUrl: './patient-clinic-info.component.html',
  styleUrls: ['./patient-clinic-info.component.css']
})
export class PatientClinicInfoComponent implements OnInit {
  @Input() patient: Patient;
  clinics: Clinic[] = [{
    id: 1,
    name: "clinic1"
  },
  {
    id: 2,
    name: "clinic2"
  }]
  constructor() { }

  ngOnInit(): void {
  }


}
