import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './core';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children:[
      {
        path: 'insurance/company',
        loadChildren: () =>
          import('./modules/insurance.company/insurance-company.module').then((m) => m.InsuranceCompanyModule)
      },
      {
        path: 'patient',
        loadChildren: () =>
          import('./modules/patient/patient.module').then((m) => m.PatientModule)
      },
      {
        path:'user',
        loadChildren:()=>
          import('./modules/user/user.module').then((m)=> m.UserModule)
        
      }
    ]
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
