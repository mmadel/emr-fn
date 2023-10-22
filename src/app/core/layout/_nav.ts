import { INavData } from '@coreui/angular-pro';

export const NavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Patient',
    url: '/patient',
    iconComponent: { name: 'cil-disabled' },
    children: [
      {
        name: 'List Patient',
        url: 'patient/list'
      },
    ]
  },
  {
    name: 'User',
    url: '/user',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Users List',
        url: 'user/list'
      },
    ]
  },
  {
    name:'Insurance Compnay',
    url:'/insurance-Compnay',
    iconComponent: { name: 'cil-devices' },
    children:[
      {
        name: 'List Insurance Compnay',
        url: '/insurance/company/list'
      }
    ]
  },
  {
    name: 'Scheduler',
    url: '/scheduler',
    iconComponent: { name: 'cil-calendar' },
    children: [
      {
        name: 'View Scheduler',
        url: '/scheduler/view'
      },
      {
        name: 'Scheduler Configuration',
        url: '/scheduler/configuration'
      }
    ]
  }
];
