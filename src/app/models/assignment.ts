export class Assignment {
    userid: number;
    id: number;
    releaseDate: Date;
    dueDate: Date;
    title: string;
    body: string;
    coursePercentage: number;
    studentGrade: number;


    constructor(args) {
        if (args) {
            this.userid = args.userid;
            this.id = args.id;
            this.releaseDate = args.releaseDate;
            this.dueDate = args.dueDate;
            this.title = args.title;
            this.body = args.body;
            this.coursePercentage = args.coursePercentage;
            this.studentGrade = args.studentGrade;
        }
    }
}
