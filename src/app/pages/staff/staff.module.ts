import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { StaffService } from '../../providers/staff/staff.service';
import { routing } from './staff.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers: [StaffService],
  declarations: [StaffComponent]
})
export class StaffModule { }
