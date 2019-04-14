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
    // data: PeriodicElement[] = ELEMENT_DATA;

    @Input() idAssignment: string;
    assignmentId: number;
    assignments: SubmittedAssignment[];
    studentid: number;
    grade: number;
    newGrade: number;

    // error = '';

    constructor(
        private assignmentServ: AssignmentsService,
        private router: Router,
        private route: ActivatedRoute) {

        this.assignmentId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    }

    // id: number;


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
                    if (item.assignmentId.toString() === this.assignmentId.toString()) {
                        this.assignments.push(item);
                        // console.log(item.assignmentId);
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

        // const args = {Nmae: 'Naenene'};
        // const args = 'args ';

        console.log('Clicked on Ass ID ' + this.grade + args.assignmentId + ' and student ID ' + args.studentId + 'mmmm' + args.grade);


        const submitAssignment = new SubmittedAssignment(args);
        console.log(submitAssignment);
        this.assignmentServ.updateGrade(args.assignmentId, args.studentId, args.grade).subscribe(
            (res: SubmittedAssignment[]) => {
                this.assignments = [];
                res.map((ass) => {
                        if (ass.assignmentId.toString() === this.assignmentId.toString()) {
                            ass.grade = this.newGrade;
                            console.log(this.newGrade);
                            this.assignments.push(ass);
                            this.router.navigateByUrl('/assignments');
                        }

                    }
                );

            }
        );
    }

}




