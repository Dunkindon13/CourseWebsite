/* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 9, 2019
* Last Modified: April 14, 2019
* Main Purpose:  Filter assignment. Display only one which was clicked. Option to add
*                a grade to the filtered assignment.                            */


import {Component, Input, OnInit} from '@angular/core';
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


export class AddGradeComponent implements OnInit {
    displayedColumns: string[] = ['ass_id', 'studentid', 'date', 'submission', 'currentgrade', 'grade', 'submitGrade'];
    columnsToDisplay: string[] = this.displayedColumns.slice();


    @Input() idAssignment: string;
    assignmentId: number;
    assignments: SubmittedAssignment[];
    studentid: number;
    grade: number;
    newGrade: number;

    error = '';

    constructor(
        private assignmentServ: AssignmentsService,
        private router: Router,
        private route: ActivatedRoute) {

        this.assignmentId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    }

    ngOnInit() {
        this.filterAssignment();
    }
    // filter assignments by the click on it.
    filterAssignment(): void {
        this.assignmentServ.getAllSubmitted().subscribe(
            (res: SubmittedAssignment[]) => {
                this.assignments = [];
                for (const item of res) {
                    if (item.assignmentId.toString() === this.assignmentId.toString()) {
                        this.assignments.push(item);

                    }

                }

            }
        );
    }

   addGrade(stdId, gradeNew): void {
        const args = {
            assignmentId: this.assignmentId,
            studentId: parseInt(stdId, 10),
            grade: parseInt(gradeNew, 10),

        };


        console.log('Clicked on Ass ID ' + this.grade + args.assignmentId + ' and student ID ' + args.studentId + 'mmmm' + args.grade);


       // Call to upgrade grade  in submitted_assignments as per assignmentId and studentId
        this.assignmentServ.updateGrade(args.assignmentId, args.studentId, args.grade).subscribe(
            (res: SubmittedAssignment[]) => {
                this.assignments = [];
                res.map((assgm) => {
                        if (assgm.assignmentId.toString() === this.assignmentId.toString()) {
                            console.log(assgm.grade);
                            assgm.grade = this.newGrade;
                            // console.log(args.grade);
                            this.grade = assgm.grade;
                            this.router.navigateByUrl('/assignments');

                        }
                    }
                );
            },
         (err) => {
            this.error = err;
        }
        );
    }

}




