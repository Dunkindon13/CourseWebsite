export class User {
    id: number;
    user: string;
    password: string;
    role: string;
    name: string;

    constructor(args) {
        if (args) {
            this.id = args.id;
            this.user = args.user;
            this.password = args.password;
            this.role = args.role;
            this.name = args.name;
        }
    }
}