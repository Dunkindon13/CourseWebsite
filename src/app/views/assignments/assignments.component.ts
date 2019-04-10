import {Component, OnInit} from '@angular/core';
import {Assignment} from '../../models/assignment';
import {AssignmentsService} from '../../models/assignments.service';

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
    assignments: Assignment[];
    error = '';
    success = '';

    teacherIsLoggedIn = true;
    studentIsLoggedIn = true;

    constructor(private assignmentsServ: AssignmentsService) {
    }

    ngOnInit() {
        this.getAssignments();
    }

    getAssignments(): void {
        this.assignmentsServ.getAll().subscribe(
            (res: Assignment[]) => {
                console.log('This Works');
                this.assignments = res;
            },
            (err) => {
                this.error = err;
            }
        );
    }

}
