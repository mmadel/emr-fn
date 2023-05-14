import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientComponent } from './components/create/create-patient.component';
import { ListPatientComponent } from './components/list/list-patient.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'patient',
    },
    children:[
      {
        path: 'list',
        component: ListPatientComponent,
        data: {
          title: 'list',
        },
      },
      {
        path: 'create',
        component: CreatePatientComponent,
        data: {
          title: 'create',
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
