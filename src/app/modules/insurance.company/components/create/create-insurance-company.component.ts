import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceCompanyTypeEnum } from 'src/app/models/enums/insurance.company.type';
import { InsuranceCompany } from '../../models/insurance.company';

@Component({
  selector: 'app-create-insurance-company',
  templateUrl: './create-insurance-company.component.html',
  styleUrls: ['./create-insurance-company.component.css']
})
export class CreateInsuranceCompanyComponent implements OnInit {
  @ViewChild('insuranceCompanyCreateForm') insuranceCompanyCreateForm: NgForm;
  insuranceCompany: InsuranceCompany = {
    id: null,
    name: null,
    insuranceType: null,
    phone: null,
    fax: null,
    addresses: null,
    clinicId: null,
  }
  keys = Object.values;
  types = InsuranceCompanyTypeEnum;
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
