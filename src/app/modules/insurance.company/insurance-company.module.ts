import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsuranceCompanyRoutingModule } from './insurance-company-routing.module';

import {
  GridModule,
  SharedModule,
  SmartTableModule,
  SmartPaginationModule,
  AlertModule,
  FormModule,
  ButtonModule,
  CardModule,
} from '@coreui/angular-pro';

import {
  CreateInsuranceCompanyComponent,
  ListInsuranceCompanyComponent
} from './index'
import { EmrCommonModule } from '../common/emr-common.module';


@NgModule({
  declarations: [
    ListInsuranceCompanyComponent,
    CreateInsuranceCompanyComponent
  ],
  imports: [
    AlertModule,
    CommonModule,
    InsuranceCompanyRoutingModule,
    GridModule,
    SharedModule,
    SmartTableModule,
    SmartPaginationModule,
    FormModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    EmrCommonModule
  ]
})
export class InsuranceCompanyModule { }
