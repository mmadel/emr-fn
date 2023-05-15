import { Component, Input, OnInit } from '@angular/core';
import { IdType } from 'src/app/modules/common/models/enums/id.type';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patient-id-info',
  templateUrl: './patient-id-info.component.html',
  styleUrls: ['./patient-id-info.component.css']
})
export class PatientIdInfoComponent implements OnInit {
  @Input() patient: Patient;
  idTypeKeys = Object.values;
  idTypes= IdType;
  constructor() { }

  ngOnInit(): void {
  }

}
