import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as _ from "lodash";
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { AddressComponent } from 'src/app/modules/common/components/address/address.component';
import { ContactComponent } from 'src/app/modules/common/components/contact/contact.component';
import { BasicComponent } from 'src/app/util/basic.component';
import { Patient } from '../../models/patient';
import { PatientBasicInfoComponent } from './patient.basic.info/patient-basic-info.component';
import { PatientCaseInfoComponent } from './patient.case.info/patient-case-info.component';
import { PatientIdInfoComponent } from './patient.id.info/patient-id-info.component';
import { PatientInsuranceInfoComponent } from './patient.insurance.info/patient-insurance-info.component';
@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit, AfterViewInit {
  @ViewChild('basicInfoComponent') basicInfoComponent: PatientBasicInfoComponent;
  @ViewChild('idInfoComponent') idInfoComponent: PatientIdInfoComponent;
  @ViewChild('addressComp') addressComp: AddressComponent;
  @ViewChild('contactComponent') contactComponent: ContactComponent;
  @ViewChild('insuranceComponent') insuranceComponent: PatientInsuranceInfoComponent;
  @ViewChild('caseComponent') caseComponent: PatientCaseInfoComponent;

  @ViewChildren('component') components: QueryList<BasicComponent>;
  valid: boolean = true;
  invalidFields: string[] = [];

  basicInvalidFields: string[] = [];
  idInvalidFields: string[] = [];
  addressInvalidFields: string[] = [];
  contactInvalidFields: string[] = [];
  clinicInvalidFields: string[] = [];
  insuranceInvalidFields: string[] = [];
  caseInvalidFields: string[] = [];
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
  ngAfterViewInit(): void {

  }

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
      this.resetInvalidFields();
      this.getMissingFields();
      this.getMissingMultipleFields();
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
    var valid: boolean = true;
    this.components.forEach(component => {
      valid = valid && component.isValid();
    });

    return valid;
  }

  resetInvalidFields() {
    this.basicInvalidFields = [];
    this.idInvalidFields = [];
    this.addressInvalidFields = [];
    this.contactInvalidFields = [];
    this.insuranceInvalidFields = [];
    this.caseInvalidFields = [];
  }
  getMissingFields() {
    this.components.forEach(component => {
      component.getInvalidControls().forEach(invalidControl => {
        if (component instanceof PatientBasicInfoComponent)
          this.basicInvalidFields.push(invalidControl);
        if (component instanceof PatientIdInfoComponent)
          this.idInvalidFields.push(invalidControl);
        if (component instanceof ContactComponent)
          this.contactInvalidFields.push(invalidControl);
        if (component instanceof AddressComponent)
          this.addressInvalidFields.push(invalidControl);
        if (component instanceof PatientInsuranceInfoComponent)
          this.insuranceInvalidFields.push(invalidControl);
        if (component instanceof PatientCaseInfoComponent)
          this.caseInvalidFields.push(invalidControl);
      });
    });

  }

  getMissingMultipleFields() {
    if (this.patient.clinicsId.length === 0)
      this.clinicInvalidFields.push("Assign Clinic(s) to Patient")
    if (this.patient.contacts.length === 0)
      this.contactInvalidFields.push("Push Contacts(s) Inputs")
    if (this.patient.addresses.length === 0)
      this.addressInvalidFields.push("Push Address(s) Inputs")
    if (this.patient.patientInsuranceModels.length === 0)
      this.insuranceInvalidFields.push("Push Insurance(s) Inputs")
    if (this.patient.patientCaseModels.length === 0)
      this.caseInvalidFields.push("Push Cases(s) Inputs")
  }
  resetFormComponents() {
    this.components.forEach(component => {
      component.resetForm();
    });
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
