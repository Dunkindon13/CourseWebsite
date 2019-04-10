export class Assignment {
    assignment_id: number;
    student_id: number;
    date: Date;
    submission: string;
    grade: number;


    constructor(args) {
        if (args) {

            this.assignment_id = args.assignment_id;
            this.student_id = args.student_id;
            this.date = args.date;
            this.submission = args.submission;
            this.grade = args.grade;
        }
    }
}
