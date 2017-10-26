import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Student } from '../../models/students.interface';
@Injectable()
export class StudentsService {

  constructor(
    private _http: Http) { }

  getAllStudents() {
    return this._http.get('http://hp-api.herokuapp.com/api/characters/students');
  }
}
