export class SubmittedAssignment {
    assignmentId: number;
    studentId: number;
    date: Date;
    submission: string;
    grade: number;


    constructor(args) {
        if (args) {

            this.assignmentId = args.assignmentId;
            this.studentId = args.studentId;
            this.date = args.date;
            this.submission = args.submission;
            this.grade = args.grade;
        }
    }
}
