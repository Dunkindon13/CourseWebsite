/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 9, 2019
* Last Modified: April 11, 2019
* Main Purpose: TypeScript component to add a grade to an assignment by a teacher and submitting it.
*/
import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen'},
    {position: 2, name: 'Helium'},

];


@Component({
    selector: 'app-add-grade',
    templateUrl: './add-grade.component.html',
    styleUrls: ['./add-grade.component.css']
})


export class AddGradeComponent {
    displayedColumns: string[] = ['Student ID', 'Student Name'];
    columnsToDisplay: string[] = this.displayedColumns.slice();
    data: PeriodicElement[] = ELEMENT_DATA;

    constructor() {
    }


    addGrade() {

    }

}
