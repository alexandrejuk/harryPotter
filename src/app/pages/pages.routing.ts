import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: 'students', loadChildren: './students/students.module#StudentsModule' },
      { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
