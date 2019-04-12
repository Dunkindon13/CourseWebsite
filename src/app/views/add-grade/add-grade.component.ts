import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css'],
})





export class AddGradeComponent  {
  displayedColumns: string[] = ['position', 'name', 'grade', 'submitGrade'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  constructor() { }


  addGrade() {

}

}
export interface PeriodicElement {
  name: string;
  position: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
];

