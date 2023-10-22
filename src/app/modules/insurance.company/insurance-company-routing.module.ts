import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInsuranceCompanyComponent } from './components/create/create-insurance-company.component';
import { ListInsuranceCompanyComponent } from './components/list/list-insurance-company.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'insurance-company',
    },
    children: [
      {
        path: 'list',
        component: ListInsuranceCompanyComponent,
        data: {
          title: 'List insurance company',
        },
      },
      {
        path: 'create',
        component: CreateInsuranceCompanyComponent,
        data: {
          title: 'Create insurance company',
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
