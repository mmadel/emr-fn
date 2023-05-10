import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInsuranceCompanyComponent } from './components/list/list-insurance-company.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'insurance-company',
    },
    children:[
      {
        path: 'list',
        component: ListInsuranceCompanyComponent,
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
export class InsuranceCompanyRoutingModule { }
