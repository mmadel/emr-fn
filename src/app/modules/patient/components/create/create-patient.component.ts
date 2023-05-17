import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from "lodash";
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../../models/patient';
import { PatientBasicInfoComponent } from './patient.basic.info/patient-basic-info.component';
import { PatientIdInfoComponent } from './patient.id.info/patient-id-info.component';
@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  @ViewChild('basicInfoComponent') basicInfoComponent: PatientBasicInfoComponent;
  @ViewChild('idInfoComponent') idInfoComponent: PatientIdInfoComponent;
  valid: boolean = true;
  invalidFields: string[];
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
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  create() {
    this.valid = this.checkValidation();
    if (this.valid) {
      this.converPatientFields();
      this.toastr.success('Pateint Created.!!');
      this.resetFormComponents();
      console.log(JSON.stringify(this.patient))
    } else {
      this.invalidFields = this.getInvalidFields();
      this.toastr.error('Missing Fields', 'Error In Creation');
      this.scrollUp();
    }
  }

  converPatientFields() {
    this.convertDateToLong()
    this.convertClinicIdsToNumbers()
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

  checkValidation(): boolean {
    var valid: boolean = this.basicInfoComponent.isValid() && this.idInfoComponent.isValid();
    return valid;
  }

  getInvalidFields() {
    var invalidControls: string[] = [];

    if (!this.basicInfoComponent.isValid())
      this.basicInfoComponent.getInvalidControls().forEach(invalidControl => {
        invalidControls.push(invalidControl);
      });
    if (!this.idInfoComponent.isValid())
      this.idInfoComponent.getInvalidControls().forEach(invalidControl => {
        invalidControls.push(invalidControl);
      });

    return invalidControls;
  }
  resetFormComponents() {
    this.basicInfoComponent.resetForm();
  }
  scrollUp() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.scrollTo(0, 0);
      }
    })();
  }
}
