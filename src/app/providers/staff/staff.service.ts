import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StaffService {
  private url = 'http://localhost:3000/characters';

  constructor(private _http: Http) {}

  getAllStaff() {
    return this._http
      .get(this.url)
      .map(students =>
        students.json().filter(student => student.hogwartsStaff === true)
      );
  }
}
