export class Announcement {
    id: number;
    date: Date;
    title: string;
    body: string;

    constructor(args) {
        if (args) {
            this.id = args.id;
            this.date = args.date;
            this.title = args.title;
            this.body = args.body;
        }
    }
}
