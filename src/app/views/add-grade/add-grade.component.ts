import { Component, Input, OnInit } from '@angular/core';
import {Assignment} from '../../models/assignment';
import {AssignmentsService} from '../../models/assignments.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {SubmittedAssignment} from '../../models/submittedAssignment';
import {variable} from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css'],
})


export class AddGradeComponent   implements OnInit {
  displayedColumns: string[] = ['ass_id', 'studentid', 'date', 'submission', 'grade', 'submitGrade'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  // data: PeriodicElement[] = ELEMENT_DATA;

  @Input() idAssignment: string;
  assignmentId: number;
  assignments: SubmittedAssignment[];
  // tmpassignments: SubmittedAssignment[];

  // error = '';

  constructor(
      private assignmentServ: AssignmentsService,
      private router: Router,
      private route: ActivatedRoute) {

    this.assignmentId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }

  //
   id: number;
  // date: Date;
  // submission: string;

  ngOnInit() {
    this.addGrade();
  }

  addGrade(): void {
    this.assignmentServ.getAllSubmitted().subscribe(
        (res: SubmittedAssignment[]) => {
          // this.tmpassignments = res;
          // this.assignments = res;
          this.assignments = [];

          // this.assignments = this.tmpassignments;
          console.log('MY ASSIGNMENT');
          for (const item of res) {
            console.log(item);
            console.log(this.assignmentId);
            console.log(item.assignmentId);
            if ( item.assignmentId.toString() === this.assignmentId.toString() ) {
              this.assignments.push(item);
              console.log(item.assignmentId);
            }

          }

          // this.assignments = res;
        }
    );
  }

}

































  /*constructor( private assignmentServ: AssignmentsService, private router: Router,
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



}*/
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

