import { Routes } from '@angular/router';
import { CRMComponent } from './pages/CRM/crm.component';
import { DashboardComponent } from './pages/CRM/dashboard/dashboard.component';
import { AddContactComponent } from './pages/CRM/add-contact/add-contact.component';
import { ListContactComponent } from './pages/CRM/list-contact/list-contact.component';

export default [
  {
    path: '',
    redirectTo: 'crm/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'crm',
    redirectTo: 'crm/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'crm',
    component: CRMComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'add-contact',
        component: AddContactComponent
      },
      {
        path: 'list-contact',
        component: ListContactComponent
      }
    ]
  }
] as Routes;
