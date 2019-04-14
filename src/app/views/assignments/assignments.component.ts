/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 9, 2019
* Last Modified: April 11, 2019
* Main Purpose: TypeScript component to show all assignments, current and submitted.
*/
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
    ongoing: Assignment[];
    due: Assignment[];
    upcoming: Assignment[];
    error = '';
    success = '';
    today = new Date();

    constructor(private assignmentsServ: AssignmentsService,
                private nav: NavComponent) {
        this.today = new Date();
        this.ongoing = [];
        this.due = [];
        this.upcoming = [];
    }

    ngOnInit() {
        this.getAssignments();
    }

    getAssignments(): void {
        this.assignmentsServ.getAll().subscribe(
            (res: Assignment[]) => {
                this.assignments = res;
                this.assignments.forEach(element => {
                    const dueDate = new Date(element.dueDate);
                    const releaseDate = new Date(element.releaseDate);
                    if (dueDate >= this.today && releaseDate <= this.today) {
                        this.ongoing.push(element);
                    } else if(dueDate < this.today) {
                        this.due.push(element);
                    } else {
                        this.upcoming.push(element);
                    }
                });


            },
            (err) => {
                this.error = err;
            }
        );
    }
}
