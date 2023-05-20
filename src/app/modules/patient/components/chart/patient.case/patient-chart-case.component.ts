import { Component, Input, OnInit } from '@angular/core';
import { PatientName } from 'src/app/util/name.util';
import { PatientCase } from '../../../models/case/patient.case';

@Component({
  selector: 'app-patient-chart-case',
  templateUrl: './patient-chart-case.component.html',
  styleUrls: ['./patient-chart-case.component.css']
})
export class PatientChartCaseComponent implements OnInit {
  treatingDoctor: string;
  referringDoctor: string;
  referringNPI: string;
  @Input() case: PatientCase;
  constructor() { }

  ngOnInit(): void {
    this.gettreatingDoctorFullName();
  }

  gettreatingDoctorFullName() {
    var fName: string = this.case.treatingDoctor?.firstName === undefined ? '' : this.case.treatingDoctor?.firstName;
    var mName: string = this.case.treatingDoctor?.middleName === undefined ? '' : this.case.treatingDoctor?.middleName;
    var lName: string = this.case.treatingDoctor?.lastName === undefined ? '' : this.case.treatingDoctor?.lastName;
    this.treatingDoctor = PatientName.formatName(fName, mName, lName)
  }

  getReferringCaseData() {
    this.referringDoctor = this.case.referralCase.referringPartyName === null ? '' : this.case.referralCase.referringPartyName;
    this.referringNPI = this.case.referralCase.referringPartyNPI === null ? '' : this.case.referralCase.referringPartyNPI;
    
  }
}
