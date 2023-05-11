import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceCompanyType } from '../../../common/models/enums/insurance.company.type';
import { Address } from '../../../common/models/address';
import { InsuranceCompany } from '../../models/insurance.company';

@Component({
  selector: 'app-create-insurance-company',
  templateUrl: './create-insurance-company.component.html',
  styleUrls: ['./create-insurance-company.component.css']
})
export class CreateInsuranceCompanyComponent implements OnInit {
  @ViewChild('insuranceCompanyCreateForm') insuranceCompanyCreateForm: NgForm;
  typeKeys = Object.values;
  types = InsuranceCompanyType;
  insuranceCompanyAddress: Address = {
    addressType: null,
    other: null,
    firstAddress: null,
    secondAddress: null,
    country: null,
    city: null,
    province: null,
    state: null,
    zipCode: null
  }
  insuranceCompany: InsuranceCompany = {
    id: null,
    name: null,
    insuranceType: null,
    phone: null,
    fax: null,
    addresses: null,
    clinicId: null,
  }
  errorMessage: string | null;
  constructor() {
  }
  ngOnInit(): void {
  }
  create() {

  }
  resetError() {

  }
}
