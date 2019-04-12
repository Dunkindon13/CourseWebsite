import { Component, Input, OnInit } from '@angular/core';
import {Assignment} from '../../models/assignment';
import {AssignmentsService} from '../../models/assignments.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {SubmittedAssignment} from '../../models/submittedAssignment';



@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css'],
})


export class AddGradeComponent   implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'grade', 'submitGrade'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  // data: PeriodicElement[] = ELEMENT_DATA;

  @Input() idAssignment: string;
  assignmentId: number;
  assignments: SubmittedAssignment[];
  addGradeForm = ({
    idStudent: [null],
    nameStudent: [null],
    grade: [null],
  });
  error;


  constructor( private assignmentServ: AssignmentsService, private router: Router,
               private route: ActivatedRoute) {
    this.assignmentId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments(): void {
    this.assignmentServ.getAllSubmitted().subscribe(
        (res: SubmittedAssignment[]) => {
          console.log('This Works');
          this.assignments = res;
          console.log(this.assignments);
          this.assignments = this.assignments.filter(element => {
            return element.assignmentId !== this.assignmentId;
          });
          console.log(this.assignments);
        },
        (err) => {
          this.error = err;
        }
    );

  }



}
/*
export interface PeriodicElement {
  name: string;
  position: number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
];
*/

