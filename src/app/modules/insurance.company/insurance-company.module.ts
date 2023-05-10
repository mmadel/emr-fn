import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceCompanyRoutingModule } from './insurance-company-routing.module';

import {
  GridModule,
  SharedModule,
  SmartTableModule,
  SmartPaginationModule,
  AlertModule,
  FormModule,
  ButtonModule
} from '@coreui/angular-pro';

import {
  CreateInsuranceCompanyComponent,
  ListInsuranceCompanyComponent
} from './index'


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
    ButtonModule
  ]
})
export class InsuranceCompanyModule { }
