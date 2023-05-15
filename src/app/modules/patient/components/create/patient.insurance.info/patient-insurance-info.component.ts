import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentType } from 'src/app/modules/common/models/enums/payment.type';
import { PatientInsurance } from '../../../models/insurance/patient.insurance';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patient-insurance-info',
  templateUrl: './patient-insurance-info.component.html',
  styleUrls: ['./patient-insurance-info.component.css']
})
export class PatientInsuranceInfoComponent implements OnInit {
  PaymentTypes = PaymentType;
  @Input() patient: Patient;
  patientInsurance:PatientInsurance={
    id: 0,
    insuranceNumber: '',
    groupNumber: '',
    paymentType: null,
    paymentValue: '',
    totalDeductible: '',
    visitAllowed: 0,
    expirationDate: 0,
    expirationDate_Date: null,
    insuranceCompany: null
  }
  @ViewChild('insuranceForm') insuranceForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if (this.insuranceForm.valid) {
      let pushedPatientInsurance: PatientInsurance = Object.assign({}, this.patientInsurance);
      this.patient.patientInsuranceModels.push(pushedPatientInsurance);
      this.insuranceForm.reset();
    }
  }
  remove(index: number) {
    this.patient.patientInsuranceModels.splice(index, 1);
  }
}
