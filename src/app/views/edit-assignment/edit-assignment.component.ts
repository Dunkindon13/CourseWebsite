import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Assignment} from '../../models/assignment';
import {AssignmentsService} from '../../models/assignments.service';

@Component({
    selector: 'app-edit-assignment',
    templateUrl: './edit-assignment.component.html',
    styleUrls: ['./edit-assignment.component.scss']
})
export class EditAssignmentComponent implements OnInit {

    id: number;
    today = new Date();
    assignments: Assignment[];
    editAssignmentForm = this.fb.group({
        title: [null],
        releaseDate: [null],
        dueDate: [null],
        teacherID: [null],
        body: [null]
    });
    success = '';
    error = '';

    constructor(
        private fb: FormBuilder,
        private assSrv: AssignmentsService,
        private router: Router,
        private route: ActivatedRoute) {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }

    ngOnInit() {

    }

    onSubmit() {
        const args = {
            id: this.id,
            teacherID: 78,
            date: this.editAssignmentForm.value.date,
            title: this.editAssignmentForm.value.title,
            body: this.editAssignmentForm.value.body
        };

        const assignment = new Assignment(args);
        this.assSrv.editAssignment(assignment).subscribe(
            (res: Assignment[]) => {
                this.assignments = res;
                this.success = 'Assignment is supposed to be created';
                console.log('CL from subscribe to addAssignment in add-assignment comp.ts', this.assignments);
                this.editAssignmentForm.reset();
            },
            (err) => {
                this.error = err;
            }
        );

        this.router.navigateByUrl('/assignments');

    }
}
