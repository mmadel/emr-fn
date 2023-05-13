import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    this.router.navigateByUrl('/patient/create');
  }
}
