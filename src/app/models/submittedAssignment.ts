export class Assignment {
    id: number;
    releaseDate: Date;
    dueDate: Date;
    title: string;
    body: string;
    weight: number;


    constructor(args) {
        if (args) {

            this.id = args.id;
            this.releaseDate = args.releaseDate;
            this.dueDate = args.dueDate;
            this.title = args.subject;
            this.body = args.information;
            this.weight = args.weight;
        }
    }
}
