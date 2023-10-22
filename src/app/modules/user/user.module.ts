import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import {
  ListUserComponent,
  CreateUserComponent
} from './index';



@NgModule({
  declarations: [
    ListUserComponent,
    CreateUserComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
