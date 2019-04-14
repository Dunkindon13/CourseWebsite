import {Component, OnInit} from '@angular/core';
import {Assignment} from '../../models/assignment';
import {AssignmentsService} from '../../models/assignments.service';
import {NavComponent} from '../nav/nav.component';

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
    assignments: Assignment[];
    error = '';
    success = '';


    constructor(private assignmentsServ: AssignmentsService,
                private nav: NavComponent) {
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
