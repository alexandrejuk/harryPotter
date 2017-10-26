import { StudentsService } from './../../providers/students/students.service';
import { Student } from './../../models/students.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[];

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentsService.getAllStudents().subscribe(data => {
        const response = (data as any);
        const object = JSON.parse(response._body);
        console.log(object);
        this.students = object;
      }, error => {
        console.log(error);
      });
  }
}
