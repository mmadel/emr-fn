import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create/create-user.component';
import { ListUserComponent } from './components/list/list-user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'user'
    },
    children: [
      {
        path: 'list',
        component: ListUserComponent,
        data: {
          title: 'list'
        }
      },
      {
        path: 'create',
        component: CreateUserComponent,
        data: {
          title: 'create'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}
