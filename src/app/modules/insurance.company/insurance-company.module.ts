import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceCompanyRoutingModule } from './insurance-company-routing.module';
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
    CommonModule,
    InsuranceCompanyRoutingModule
  ]
})
export class InsuranceCompanyModule { }
