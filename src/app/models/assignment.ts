/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 15, 2019
* Main Purpose: Class File for Assignment
*/
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
            this.title = args.title;
            this.body = args.body;
            this.weight = args.weight;
        }
    }
}
