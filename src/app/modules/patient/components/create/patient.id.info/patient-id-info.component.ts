import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IdType } from 'src/app/modules/common/models/enums/id.type';
import { BasicComponent } from 'src/app/util/basic.component';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patient-id-info',
  templateUrl: './patient-id-info.component.html',
  styleUrls: ['./patient-id-info.component.css']
})
export class PatientIdInfoComponent extends BasicComponent implements OnInit, AfterViewInit {
  @ViewChild('patientIdForm') patientIdForm: NgForm;
  @Input() patient: Patient;
  idTypes = IdType;
  constructor() { super() }
  ngAfterViewInit(): void {
    this.setForm(this.patientIdForm)
  }

  ngOnInit(): void {
  }

}
