import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { StudentsComponent } from './students.component';

export const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: []
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
