export class Student {
    id: number;
    user: string;
    password: string;
    name: string;

    constructor(args) {
        if (args) {
            this.id = args.id;
            this.user = args.user;
            this.password = args.password;
            this.name = args.name;
        }
    }
}
