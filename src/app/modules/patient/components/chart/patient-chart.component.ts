import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ListTemplate } from 'src/app/modules/common/template/list.template';
import { AddressUtil } from 'src/app/util/address.util';
import { PatientName } from 'src/app/util/name.util';
import { PatientCase } from '../../models/case/patient.case';
import { PatientChartInfo } from '../../models/chart/patient.chart.info';
import { Clinic } from '../../models/clinic';
import { Patient } from '../../models/patient';
import { PateintResponse } from '../../models/response/patient.response';
import { PateintCaseService } from '../../services/patient/cases/pateint-case.service';
import { PatientFinderService } from '../../services/patient/patient-finder.service';

@Component({
  selector: 'app-patient-chart',
  templateUrl: './patient-chart.component.html',
  styleUrls: ['./patient-chart.component.css']
})
export class PatientChartComponent extends ListTemplate implements OnInit {
  accordionAlwaysOpen: boolean = false;
  patientChartInfo: PatientChartInfo = {
    id: 0,
    name: '',
    dateOfBirth: '',
    age: 0,
    address: []
  };
  patientCases: PatientCase[];
  patientId: number;
  constructor(private route: ActivatedRoute
    , private patientFinderService: PatientFinderService,
    private pateintCaseService: PateintCaseService) { super(); }

  ngOnInit(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('patientId'))
    this.patientFinderService.getPatient(this.patientId, 1).subscribe((response: PateintResponse) => {
      var patient: Patient = response.records
      this.patientCases = patient.patientCaseModels;
      this.patientChartInfo.name = PatientName.formatName(patient.firstName, patient.middleName, patient.lastName);
      this.patientChartInfo.dateOfBirth = moment(patient.birthDate).format("MM-DD-YYYY");

      for (var i = 0; i < patient.addresses.length; i++) {

        this.patientChartInfo.address.push(AddressUtil.formatAddress(patient.addresses[i]))
      }
      console.log(this.patientChartInfo.address);
      this.patientChartInfo.age = moment().diff(patient.birthDate, 'years');
    })
  }
  changeCase(event: any) {
    this.accordionAlwaysOpen = true;
    var caseId: number = event.target.value;
    if (caseId !== null)
      this.pateintCaseService.selectedCase$.next(caseId);
  }
}
