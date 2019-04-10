export class Assignment {
    userid: number;
    id: number;
    teacherCopy: number;
    class: string;
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
            this.teacherCopy = args.teachercopy;
            this.class = args.class;
            this.releaseDate = args.releaseDate;
            this.dueDate = args.dueDate;
            this.title = args.title;
            this.body = args.body;
            this.weight = args.weight;
            this.studentGrade = args.studentGrade;
        }
    }
}
