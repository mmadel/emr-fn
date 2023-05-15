import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  private _patient: Patient = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: 0,
    gender: null,
    maritalStatus: null,
    suffix: null,
    employerName: '',
    title: null,
    addtionalInfo:'',
    idType: null,
    patientId: '',
    effectiveFromDate: 0,
    effectiveToDate: 0,
    addresses: [],
    contacts: [],
    emergencies: [],
    isDependent: false,
    dependent: {
      address: {
        addressType: null,
        other: null,
        firstAddress: null,
        secondAddress: null,
        country: null,
        city: null,
        province: null,
        state: null,
        zipCode: null
      },
      phone: null,
      name: null
    },
    clinicsId: [],
    patientCaseModels: [],
    patientInsuranceModels: []
  };
  public get patient(): Patient {
    return this._patient;
  }
  public set patient(value: Patient) {
    this._patient = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

  getPatientAddresses(pushedAddress: any) {

  }
}
