export class Assignment {
    userid: number;
    id: number;
    releaseDate: Date;
    dueDate: Date;
    title: string;
    body: string;
    weight: number;
    studentGrade: number;


    constructor(args) {
        if (args) {
            this.userid = args.userid;
            this.id = args.id;
            this.releaseDate = args.releaseDate;
            this.dueDate = args.dueDate;
            this.title = args.title;
            this.body = args.body;
            this.weight = args.weight;
            this.studentGrade = args.studentGrade;
        }
    }
}
