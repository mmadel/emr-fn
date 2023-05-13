import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './pips/phone.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule, ButtonModule, FormModule, GridModule, TableModule, UtilitiesModule, ButtonGroupModule } from '@coreui/angular-pro';
import { AddressComponent } from './components/address/address.component';
import { ZipcodeDirective } from './directives/zipcode.directive';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { IconModule } from '@coreui/icons-angular';

const APP_COMMON_COMPONENTS = [
  AddressComponent,
]

const APP_COMMON_PIPES = [
  PhonePipe
]

const APP_COMMON_DIRECTIVES = [
  ZipcodeDirective,
  NumberonlyDirective,
]
@NgModule({
  declarations: [
    APP_COMMON_COMPONENTS,
    ...APP_COMMON_PIPES,
    ...APP_COMMON_DIRECTIVES
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    SharedModule,
    FormModule,
    ButtonModule,
    TableModule,
    UtilitiesModule,
    IconModule,
    ButtonGroupModule
  ],
  exports: [
    APP_COMMON_COMPONENTS,
    ...APP_COMMON_PIPES,
    ...APP_COMMON_DIRECTIVES
  ],
})
export class EmrCommonModule { }
