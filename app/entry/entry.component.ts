import { Component, OnInit } from '@angular/core';
import { UserEntry } from '../user-entry'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  Entries: UserEntry[] = [
    new UserEntry(new Date(2020,3,14),1, 'My new data entry', 'My day has been one good day full of exitement been a good day today'),

  ];
  delete(){
    this.Entries.splice(0,1)
  }

  addEntry(entry){
    let goalLength = this.Entries.length;
    entry.id = goalLength+1;
    entry.completeDate = new Date(entry.completeDate)
    this.Entries.push(entry)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
