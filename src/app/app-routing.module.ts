import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './core';

const routes: Routes = [
  {
    path: 'emr',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children:[
      {
        path: 'patient',
        loadChildren: () =>
          import('./modules/patient/patient.module').then((m) => m.PatientModule)
      },
      {
        path: 'administration',
        loadChildren: () =>
          import('./modules/administration/administration.module').then((m) => m.AdministrationModule)
      },
    ]
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
