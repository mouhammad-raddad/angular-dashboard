import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
  },

  {
    path: 'user-form',
    component: UserFormComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: DashboardComponent,
  },
];
