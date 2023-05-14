import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient={
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: 0,
    maritalStatus: '',
    suffix: '',
    employerName: '',
    title: '',
    idType: '',
    patientId: '',
    effectiveFromDate: 0,
    effectiveToDate: 0,
    addresses: [],
    contacts: [],
    emergencies: [],
    dependent: null,
    clinicsId: [],
    patientCaseModels: [],
    patientInsuranceModels: []
  };
  constructor() { }

  ngOnInit(): void {
  }

  getInsuranceCompanyAddresses(pushedAddress: any) {

  }
}
