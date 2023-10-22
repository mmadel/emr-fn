import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconModule } from '@coreui/icons-angular';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DateRangePickerModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
  AlertModule,
} from '@coreui/angular-pro';
const COREUI_MODULES = [
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
  DateRangePickerModule,
  AlertModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    IconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...COREUI_MODULES
  ]
})
export class ShareModule { }
