import { Component, OnInit, ViewChild } from '@angular/core';
import { NgControl, NgForm, NgModel, ValidationErrors } from '@angular/forms';
import { InsuranceCompanyType } from '../../../common/models/enums/insurance.company.type';
import { Address } from '../../../common/models/address';
import { InsuranceCompany } from '../../models/insurance.company';
import { ToastrService } from 'ngx-toastr';
import { AddressComponent } from 'src/app/modules/common/components/address/address.component';
import { InsuranceCompanyService } from '../../services/insurance-company.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-insurance-company',
  templateUrl: './create-insurance-company.component.html',
  styleUrls: ['./create-insurance-company.component.css']
})
export class CreateInsuranceCompanyComponent implements OnInit {
  @ViewChild('insuranceCompanyCreateForm') insuranceCompanyCreateForm: NgForm;
  @ViewChild('addressComp') addpressComp: AddressComponent;
  typeKeys = Object.values;
  types = InsuranceCompanyType;
  addresses: Address[];
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
    addresses: [],
    clinicId: null,
  }
  errorMessage: string | null;
  submitted: boolean;
  constructor(private toastr: ToastrService,
    private insuranceCompanyService: InsuranceCompanyService,
    private router: Router,
    private spinner: NgxSpinnerService) {
  }
  ngOnInit(): void {
  }
  create() {
   
    if (this.insuranceCompanyCreateForm.valid && this.addresses !== undefined) {
      this.insuranceCompany.addresses = this.addresses;
      this.insuranceCompany.clinicId = 1;
      console.log(JSON.stringify(this.insuranceCompany))
      this.spinner.show();
      this.insuranceCompanyService.create(this.insuranceCompany).subscribe(() => {
        this.spinner.hide();
        this.insuranceCompanyCreateForm.reset();
        this.toastr.success('Insurance Company Created.!!');
        this.addpressComp.addresses = [];
        this.router.navigateByUrl('insurance/company/list')
      })
    } else {
      this.toastr.error('Please Check Your Inputs', 'Error In Creation');
    }
  }
  resetError() {

  }
  getInsuranceCompanyAddresses(addresses: any) {
    this.addresses = addresses;
  }
}
