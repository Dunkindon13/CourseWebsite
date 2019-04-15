/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 15, 2019
* Main Purpose: Class File for Submitted Assignment
*/
export class SubmittedAssignment {
    assignmentId: number;
    studentId: number;
    date: Date;
    submission: string;
    grade: number;


    constructor(args?) {
        if (args) {

            this.assignmentId = args.assignmentId;
            this.studentId = args.studentId;
            this.date = args.date;
            this.submission = args.submission;
            this.grade = args.grade;
        }
    }
}
