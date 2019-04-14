/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 9, 2019
* Last Modified: April 11, 2019
* Main Purpose: TypeScript component to add a grade to an assignment by a teacher and submitting it.
*/
import { Component, Input, OnInit } from '@angular/core';
import {Assignment} from '../../models/assignment';
import {AssignmentsService} from '../../models/assignments.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {SubmittedAssignment} from '../../models/submittedAssignment';
import {variable} from '@angular/compiler/src/output/output_ast';
import {logger} from 'codelyzer/util/logger';
import {Announcement} from '../../models/announcement';



@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})


export class AddGradeComponent   implements OnInit {
  displayedColumns: string[] = ['ass_id', 'studentid', 'date', 'submission', 'currentgrade', 'grade', 'submitGrade'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  // data: PeriodicElement[] = ELEMENT_DATA;

  @Input() idAssignment: string;
  assignmentId: number;
  assignments: SubmittedAssignment[];
  studentid: number;
  grade: number;

  // error = '';

  constructor(
      private assignmentServ: AssignmentsService,
      private router: Router,
      private route: ActivatedRoute) {

    this.assignmentId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

  }

   id: number;


  ngOnInit() {
    this.sortAss();
  }

  sortAss(): void {
    this.assignmentServ.getAllSubmitted().subscribe(
        (res: SubmittedAssignment[]) => {
          this.assignments = [];


          // console.log('MY ASSIGNMENT');
          for (const item of res) {
            // console.log(item);
            // console.log(this.assignmentId);
            // console.log(item.assignmentId);
            if ( item.assignmentId.toString() === this.assignmentId.toString() ) {
              this.assignments.push(item);
              // console.log(item.assignmentId);
            }

          }

        }
    );
  }

  addGrade(stdId): void {
      const args = {
      assignmentId: this.assignmentId,
      studentId: stdId,
      grade: 78
    };

    // const args = {Nmae: 'Naenene'};
    // const args = 'args ';

      console.log('Clicked on Ass ID ' + args.assignmentId + ' and student ID ' + args.studentId);

      const submitAssignment = new SubmittedAssignment(args);
      console.log(submitAssignment);
      this.assignmentServ.updateGrade(submitAssignment).subscribe(
    (res: SubmittedAssignment[]) => {
        // this.assignments = res;
    }
    );
      this.router.navigateByUrl('/gradeassignment/' + args.assignmentId);
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

