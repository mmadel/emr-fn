import { Component, Input, OnInit } from '@angular/core';
import { Gender } from 'src/app/modules/common/models/enums/geneder';
import { IdType } from 'src/app/modules/common/models/enums/id.type';
import { MaritalStatus } from 'src/app/modules/common/models/enums/marital.status';
import { Suffix } from 'src/app/modules/common/models/enums/suffix';
import { Title } from 'src/app/modules/common/models/enums/title';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patient-basic-info',
  templateUrl: './patient-basic-info.component.html',
  styleUrls: ['./patient-basic-info.component.css']
})
export class PatientBasicInfoComponent implements OnInit {
  @Input() patient: Patient;
  genderKeys = Object.values;
  genders = Gender;
  maritalStatusKeys = Object.values;
  maritalStatuses= MaritalStatus;
  suffixKeys = Object.values;
  Suffixes= Suffix;
  titleKeys = Object.values;
  titles= Title;
  
  constructor() { }

  ngOnInit(): void {
  }

}
