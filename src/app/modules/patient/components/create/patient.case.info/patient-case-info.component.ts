import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutoApplyModifier } from 'src/app/modules/common/models/enums/auto.apply.modifier';
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
  @ViewChild('caseForm') caseForm: NgForm;
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
    caseOtherInformation: {
      isAuthorized: null,
      addInfoForChart: null,
      autoApplyModifier: null
    }
  }
  palceOfServices = PlaceOfService;
  injuryCase = InjuryCase;
  referringParty = ReferringPartyType;
  autoApplyModifier = AutoApplyModifier;
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    if (this.caseForm.valid) {
      let patientCase: PatientCase = Object.assign({}, this.case);
      this.pateint.patientCaseModels.push(patientCase);
      this.caseForm.reset();
    }
  }
  remove(index: number) {
    this.pateint.patientCaseModels.splice(index, 1);
  }
}
