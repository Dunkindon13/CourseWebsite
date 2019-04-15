/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 15, 2019
* Main Purpose: Class File for Announcement
*/
export class Announcement {
    id: number;
    teacherid: number;
    date: Date;
    title: string;
    body: string;


    constructor(args) {
        if (args) {
            this.id = args.id;
            this.teacherid = args.teacherID;
            this.date = args.date;
            this.title = args.title;
            this.body = args.body;
        }
    }
}
