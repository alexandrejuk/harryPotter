import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsService } from './../../providers/students/students.service';
import { routing } from './students.routing';


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers: [StudentsService],
  declarations: [StudentsComponent]
})
export class StudentsModule { }
