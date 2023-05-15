import { Component, Input, OnInit } from '@angular/core';
import { PlaceOfService } from 'src/app/modules/common/models/enums/place.service';
import { PatientCase } from '../../../models/case/patient.case';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patient-case-info',
  templateUrl: './patient-case-info.component.html',
  styleUrls: ['./patient-case-info.component.css']
})
export class PatientCaseInfoComponent implements OnInit {
  @Input() pateint: Patient;
  case: PatientCase = {
    id: 0,
    title: '',
    placeOfService: null,
    treatingDoctor: null,
    injuryCase: '',
    caseInsuranceInformation: null,
    caseDiagnosis: [],
    referralCase: null,
    caseOtherInformation: null
  }
  palceOfServiceValues = Object.values;
  palceOfServices = PlaceOfService;
  constructor() { }

  ngOnInit(): void {
  }

}
