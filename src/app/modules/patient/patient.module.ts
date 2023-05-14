import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import {
ListPatientComponent,
CreatePatientComponent
} from'./index';

import {
  AlertModule, ButtonModule,
  CardModule, FormModule, GridModule,
  SharedModule, SmartPaginationModule, SmartTableModule, TableModule,
  UtilitiesModule
} from '@coreui/angular-pro';

import { EmrCommonModule } from '../common/emr-common.module';
import { IconModule } from '@coreui/icons-angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientBasicInfoComponent } from './components/create/patient.basic.info/patient-basic-info.component';
import { PatientIdInfoComponent } from './components/create/patient.id.info/patient-id-info.component';

@NgModule({
  declarations: [
    ListPatientComponent,
    CreatePatientComponent,
    PatientBasicInfoComponent,
    PatientIdInfoComponent
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
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

  ]
})
export class PatientModule { }
