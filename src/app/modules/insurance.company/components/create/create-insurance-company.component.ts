import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-insurance-company',
  templateUrl: './create-insurance-company.component.html',
  styleUrls: ['./create-insurance-company.component.css']
})
export class CreateInsuranceCompanyComponent implements OnInit {
  @ViewChild('insuranceCompanyCreateForm') insuranceCompanyCreateForm: NgForm;
  form = {
    name: null,
  };
  errorMessage: string | null;
  constructor() { }

  ngOnInit(): void {
  }
  create(){

  }
resetError(){

}
}
