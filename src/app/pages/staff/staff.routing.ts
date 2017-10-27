import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { StaffComponent } from './staff.component';

export const routes: Routes = [
  {
    path: '',
    component: StaffComponent,
    children: []
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
