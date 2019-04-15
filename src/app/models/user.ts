/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 15, 2019
* Main Purpose: Class File for Users
*/
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
