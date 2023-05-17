import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Patient } from '../../models/patient';
import * as _ from "lodash";
@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = {
    id: null,
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: 0,
    birthDate_date: null,
    gender: null,
    maritalStatus: null,
    suffix: null,
    employerName: '',
    title: null,
    addtionalInfo: '',
    idType: null,
    patientId: '',
    effectiveFromDate: 0,
    effectiveFromDate_Date: null,
    effectiveToDate: 0,
    effectiveToDate_Date: null,
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
  constructor() { }

  ngOnInit(): void {
  }
  convertDateToLong() {
    this.patient.birthDate = Number(moment(this.patient?.birthDate_date).format("x"))
    this.patient.effectiveFromDate = Number(moment(this.patient?.effectiveFromDate_Date).format("x"))
    this.patient.effectiveToDate = Number(moment(this.patient?.effectiveToDate_Date).format("x"))

    _.map(this.patient.patientInsuranceModels, patientInsuranceModel => {
      return patientInsuranceModel.expirationDate = Number(moment(patientInsuranceModel.expirationDate_Date).format("x"))
    });
  }
  convertClinicIdsToNumbers() {
    this.patient.clinicsId = this.patient.clinicsId.map(i => Number(i))
  }
  create() {
    this.convertDateToLong();
    this.convertClinicIdsToNumbers()
    console.log(JSON.stringify(this.patient))
  }
}
