import { Component, Input, OnInit } from '@angular/core';
import { InjuryCase } from 'src/app/modules/common/models/enums/injury.case';
import { PlaceOfService } from 'src/app/modules/common/models/enums/place.service';
import { ReferringPartyType } from 'src/app/modules/common/models/enums/referring.party.type';
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
    injuryCase: null,
    caseInsuranceInformation: {
      isSelfPay: false,
      selfPayAmount: null,
      primaryInsurance: null,
      secondaryInsurance: null
    },
    caseDiagnosis: [],
    referralCase: {
      referringPartyName: null,
      referringPartyNPI: null,
      phone: null,
      fax: null,
      email: null,
      referringPartyType: null,
      doctorType: ''
    },
    caseOtherInformation: null
  }
  palceOfServices = PlaceOfService;
  injuryCase = InjuryCase;
  referringParty = ReferringPartyType;
  constructor() { }

  ngOnInit(): void {
  }

}
