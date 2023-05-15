import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';

import {
  AlertModule, ButtonModule,
  CardModule, FormModule, GridModule,
  SharedModule, SmartPaginationModule, SmartTableModule, TableModule,
  UtilitiesModule,
  DatePickerModule,
  DateRangePickerModule
} from '@coreui/angular-pro';

import { EmrCommonModule } from '../common/emr-common.module';
import { IconModule } from '@coreui/icons-angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  ListPatientComponent,
  CreatePatientComponent
} from './index';

import {
  PatientBasicInfoComponent,
  PatientIdInfoComponent,
  PatientContactInfoComponent,
  PatientEmergencyInfoComponent,
  PatientInsuranceInfoComponent,
  PatientClinicInfoComponent,
  PatientCaseInfoComponent
} from './components/create'

const APP_PATIENTS_COMPONENTS = [
  ListPatientComponent,
  CreatePatientComponent
]

const APP_PATIENTS_DEPENDENCIES_COMPONENTS = [
  PatientBasicInfoComponent,
  PatientIdInfoComponent,
  PatientContactInfoComponent,
  PatientEmergencyInfoComponent,
  PatientInsuranceInfoComponent,
  PatientClinicInfoComponent,
  PatientCaseInfoComponent
]

@NgModule({
  declarations: [
    APP_PATIENTS_COMPONENTS,...APP_PATIENTS_DEPENDENCIES_COMPONENTS,
  ],
  imports: [
    AlertModule,
    CommonModule,
    PatientRoutingModule,
    GridModule,
    SharedModule,
    SmartTableModule,
    SmartPaginationModule,
    FormModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    EmrCommonModule,
    TableModule,
    UtilitiesModule,
    IconModule,
    DatePickerModule,
    DateRangePickerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

  ]
})
export class PatientModule { }
