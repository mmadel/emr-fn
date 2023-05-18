import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AddressUtil } from 'src/app/util/address.util';
import { PatientName } from 'src/app/util/name.util';
import { PatientChartInfo } from '../../models/chart/patient.chart.info';
import { Patient } from '../../models/patient';
import { PateintResponse } from '../../models/response/patient.response';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-chart',
  templateUrl: './patient-chart.component.html',
  styleUrls: ['./patient-chart.component.css']
})
export class PatientChartComponent implements OnInit {
  patientChartInfo: PatientChartInfo={
    id: 0,
    name: '',
    dateOfBirth: '',
    age: 0,
    address: []
  };
  constructor(private route: ActivatedRoute
    , private pateintService: PatientService) { }

  ngOnInit(): void {
    var patientId: number = Number(this.route.snapshot.paramMap.get('patientId'))
    this.pateintService.getPatient(patientId, 1).subscribe((response: PateintResponse) => {
      var patient: Patient = response.records
      this.patientChartInfo.name = PatientName.formatName(patient.firstName, patient.middleName, patient.lastName);
      this.patientChartInfo.dateOfBirth = moment(patient.birthDate).format("MM-DD-YYYY");

      for (var i = 0; i < patient.addresses.length; i++) {
        
        this.patientChartInfo.address.push(AddressUtil.formatAddress(patient.addresses[i]))
      }
      console.log(this.patientChartInfo.address);
      this.patientChartInfo.age = moment().diff(patient.birthDate, 'years');
    })

  }

}
