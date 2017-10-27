import { Character } from './../../models/character.interface';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../providers/staff/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  public staff$: Observable <Character[]>;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.staff$ = this.staffService.getAllStaff();
  }

}
