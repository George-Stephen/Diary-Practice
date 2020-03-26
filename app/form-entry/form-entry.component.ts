import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import {UserEntry} from '../user-entry'

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.css']
})
export class FormEntryComponent implements OnInit {
  newEntry = new UserEntry(new Date(),0,"","");

  @Output() addEntry = new EventEmitter<UserEntry>();

  submit(){
this.addEntry.emit(this.newEntry);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
