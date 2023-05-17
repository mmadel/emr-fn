import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gender } from 'src/app/modules/common/models/enums/geneder';
import { MaritalStatus } from 'src/app/modules/common/models/enums/marital.status';
import { Suffix } from 'src/app/modules/common/models/enums/suffix';
import { Title } from 'src/app/modules/common/models/enums/title';
import { BasicComponent } from 'src/app/util/basic.component';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patient-basic-info',
  templateUrl: './patient-basic-info.component.html',
  styleUrls: ['./patient-basic-info.component.css']
})
export class PatientBasicInfoComponent extends BasicComponent implements OnInit, AfterViewInit {
  @ViewChild('patientBasicInfoForm') patientBasicInfoForm: NgForm;
  @Input() patient: Patient;
  genderKeys = Object.values;
  genders = Gender;
  maritalStatusKeys = Object.values;
  maritalStatuses = MaritalStatus;
  suffixes = Suffix;
  titles = Title;

  constructor() {
    super();
  }
  ngAfterViewInit(): void {
    this.setForm(this.patientBasicInfoForm)
  }

  ngOnInit(): void { }
}
