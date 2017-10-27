import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { StudentsService } from './../../providers/students/students.service';
import { Character } from './../../models/character.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students$: Observable<Character[]>;

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.students$ = this.studentsService.getAllStudents();
  }

}
