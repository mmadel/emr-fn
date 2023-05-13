import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsuranceCompanyRoutingModule } from './insurance-company-routing.module';

import {
  AlertModule, ButtonModule,
  CardModule, FormModule, GridModule,
  SharedModule, SmartPaginationModule, SmartTableModule, TableModule,
  UtilitiesModule
} from '@coreui/angular-pro';

import { EmrCommonModule } from '../common/emr-common.module';
import {
  CreateInsuranceCompanyComponent,
  ListInsuranceCompanyComponent
} from './index';
import { IconModule } from '@coreui/icons-angular';
import { NgxSpinnerModule } from 'ngx-spinner';


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
    EmrCommonModule,
    TableModule,
    UtilitiesModule,
    IconModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

  ]
})
export class InsuranceCompanyModule { }
