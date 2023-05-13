import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
