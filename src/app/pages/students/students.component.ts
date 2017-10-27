import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { StudentsService } from './../../providers/students/students.service';
import { Student } from './../../models/students.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students$: Observable<Student[]>;

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.students$ = this.studentsService.getAllStudents();
  }

}
