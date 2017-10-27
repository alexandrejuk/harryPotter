import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Student } from '../../models/students.interface';

@Injectable()
export class StudentsService {

  private url = 'http://localhost:3000/characters';

  constructor(private _http: Http) {}

  getAllStudents() {
   return this._http
      .get(this.url)
      .map(students => students.json()
         .filter(student => student.hogwartsStudent === true));
  }
}
